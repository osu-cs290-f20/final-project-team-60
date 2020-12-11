(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tripEntery'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"trip\" data-title="
    + alias4(((helper = (helper = lookupProperty(helpers,"location") || (depth0 != null ? lookupProperty(depth0,"location") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location","hash":{},"data":data,"loc":{"start":{"line":1,"column":29},"end":{"line":1,"column":41}}}) : helper)))
    + " data-lat="
    + alias4(((helper = (helper = lookupProperty(helpers,"latitude") || (depth0 != null ? lookupProperty(depth0,"latitude") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"latitude","hash":{},"data":data,"loc":{"start":{"line":1,"column":51},"end":{"line":1,"column":63}}}) : helper)))
    + " data-long="
    + alias4(((helper = (helper = lookupProperty(helpers,"longitude") || (depth0 != null ? lookupProperty(depth0,"longitude") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"longitude","hash":{},"data":data,"loc":{"start":{"line":1,"column":74},"end":{"line":1,"column":87}}}) : helper)))
    + " data-mapurl="
    + alias4(((helper = (helper = lookupProperty(helpers,"mapImage") || (depth0 != null ? lookupProperty(depth0,"mapImage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mapImage","hash":{},"data":data,"loc":{"start":{"line":1,"column":100},"end":{"line":1,"column":112}}}) : helper)))
    + ">\n  <div class=\"trip-contents\">\n    <div class=\"trip-remove-container\">\n      <button type=\"button\" id="
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":4,"column":31},"end":{"line":4,"column":40}}}) : helper)))
    + " class=\"trip-remove\">X</button>\n    </div>\n    <div class=\"trip-image-container\">\n      <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"tripPostImage") || (depth0 != null ? lookupProperty(depth0,"tripPostImage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tripPostImage","hash":{},"data":data,"loc":{"start":{"line":7,"column":15},"end":{"line":7,"column":32}}}) : helper)))
    + ">\n    </div>\n    <div class=\"trip-info-container\">\n      <div>\n        <button type=\"button\" id="
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":11,"column":33},"end":{"line":11,"column":42}}}) : helper)))
    + " class=\"trip-title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"location") || (depth0 != null ? lookupProperty(depth0,"location") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location","hash":{},"data":data,"loc":{"start":{"line":11,"column":62},"end":{"line":11,"column":74}}}) : helper)))
    + "</button>\n      </div>\n\n      <div>\n        <span>Start Date: </span> <span class=\"trip-start-date\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"tripStartDate") || (depth0 != null ? lookupProperty(depth0,"tripStartDate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tripStartDate","hash":{},"data":data,"loc":{"start":{"line":15,"column":64},"end":{"line":15,"column":81}}}) : helper)))
    + "</span>\n      </div>\n\n      <div>\n        <span>End Date: </span> <span class=\"trip-end-date\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"tripEndDate") || (depth0 != null ? lookupProperty(depth0,"tripEndDate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tripEndDate","hash":{},"data":data,"loc":{"start":{"line":19,"column":60},"end":{"line":19,"column":75}}}) : helper)))
    + "</span>\n      </div>\n      <!-- <div class=\"trip length\">Trip length: "
    + alias4(((helper = (helper = lookupProperty(helpers,"duration") || (depth0 != null ? lookupProperty(depth0,"duration") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"duration","hash":{},"data":data,"loc":{"start":{"line":21,"column":49},"end":{"line":21,"column":61}}}) : helper)))
    + " days</div> -->\n      <div class=\"trip-location\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"location") || (depth0 != null ? lookupProperty(depth0,"location") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location","hash":{},"data":data,"loc":{"start":{"line":22,"column":33},"end":{"line":22,"column":45}}}) : helper)))
    + "</div>\n      <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":23,"column":9},"end":{"line":23,"column":24}}}) : helper)))
    + "</p>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
})();