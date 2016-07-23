/**
 * Temtory v1.0.0
 * (c) 2016 Pinkiez
 * License: MIT
 */

'use strict';

(function(window, $, _, undefined) {

  var temtory = window.temtory || {};


  // Private Methods
  // ---------------

  /**
   * @private
   * @param {String} templateId
   * @param {Object} templateData
   * @returns {String}
   */
  function getCompiledHtml(templateId, templateData) {
    var templateId = templateId;

    var templateHtml = $('#' + templateId).html();
    var compiled = _.template(templateHtml);

    var compiledHtml = compiled(templateData);
    return compiledHtml;
  }


  /**
   * @private
   * @param {Object} container
   * @param {String} templateId
   * @param {Object} templateData
   */
  function appendTemplateToContainer(container, templateId, templateData) {
    var compiledHtml = getCompiledHtml(templateId, templateData);
    $(container).append(compiledHtml);
  }


  /**
   * @private
   * @param {Object} element
   * @param {String} templateId
   * @param {Object} templateData
   */
  function renderTemplate(element, templateId, templateData) {
    if (templateId === undefined) {
      templateId = $(element).attr('template-id');
    }

    if (templateData === undefined) {
      var json = $(element).attr('template-data');
      templateData = JSON.parse(json);
    }

    var compiledHtml = getCompiledHtml(templateId, templateData);
    $(element).replaceWith(compiledHtml);
  }


  // Public Methods
  // --------------

  /**
   * @public
   * @param {Object} element
   * @param {String} templateId
   * @param {Object} templateData
   */
  temtory.render = function(element, templateId, templateData) {
    renderTemplate(container, templateId, templateData);
  };


  /**
   * render all elements that have an attribute template-id
   *
   * @public
   */
  temtory.renderAll = function() {
    $('[template-id]').each(function(index, element) {
      renderTemplate(element);
    });
  };


  /**
   * @public
   * @param {Object} container
   * @param {String} templateId
   * @param {Object} templateData
   */
  temtory.append = function(container, templateId, templateData) {
    appendTemplateToContainer(container, templateId, templateData);
  };


  /**
   * @public
   * @param {String} templateId
   * @param {Object} templateData
   * @returns {String}
   */
  temtory.create = function(templateId, templateData) {
    return getCompiledHtml(templateId, parameters);
  };


  window.temtory = temtory;

})(window, jQuery, _);
