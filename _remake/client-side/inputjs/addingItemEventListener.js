import { $ } from '../queryjs';
import { getAttributeValueAsArray } from '../parse-data-attributes';
import { ajaxPost } from '../hummingbird/lib/ajax';
import { findNearest, onAttributeEvent} from '../hummingbird/lib/dom';
import { isStringANumber } from '../hummingbird/lib/string';
import { showError } from '../common/show-error';
import { callSaveFunction } from './onSave';
import { callOnAddItemCallbacks } from './callbacks';
import optionsData from './optionsData';
const camelCase = require('lodash/camelCase');

function _defaultAddItemCallback ({templateName, listElem, whereToInsert}) {
  // pass the template name into an endpoint and get the resulting html back
  ajaxPost("/new", {templateName}, function (ajaxResponse) {
    let {htmlString, success} = ajaxResponse;

    if (!success) {
      callOnAddItemCallbacks({success: false, templateName, ajaxResponse});
      return;
    }

    if (!listElem) {
      showError("Couldn't find list element to insert new item into");
      return;
    }

    // insert the rendered template into that element
    listElem.insertAdjacentHTML(whereToInsert, htmlString);

    // save needs to be called on the list element, not the item, so it doesn't try to save to a non-existent id
    callSaveFunction(listElem);
    
    let itemElem = whereToInsert === "afterbegin" ? listElem.firstElementChild : listElem.lastElementChild;
    callOnAddItemCallbacks({success: true, listElem, itemElem, templateName, ajaxResponse});
  });
}

export default function () {
  onAttributeEvent({
    eventTypes: ["click"],
    partialAttributeStrings: ["new:"], 
    filterOutElemsInsideAncestor: "[disable-events]",
    callback: ({matchingElement, matchingAttribute}) => {
      let templateName = camelCase(matchingAttribute.substring("new:".length));
      // possible values in argArray: top/bottom or some selector
      let argArray = getAttributeValueAsArray(matchingElement, matchingAttribute);
      let position = argArray.indexOf("top") !== -1 ? "top" : "bottom";
      let whereToInsert = position === "top" ? "afterbegin" : "beforeend";
      let selector = argArray.find(arg => arg !== "top" && arg !== "bottom") || "[array]";
      // find the nearest element matching the selector (searching through ancestors consecutively)
      let listElem = findNearest({elem: matchingElement, selector});

      if (!optionsData._defaultAddItemCallback) {
        _defaultAddItemCallback({templateName, listElem, whereToInsert});
      } else {
        optionsData._defaultAddItemCallback({templateName, listElem, whereToInsert});        
      }
    }
  });
}


