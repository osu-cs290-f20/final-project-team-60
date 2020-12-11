(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tripEntery'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!-- <div class=\"trip-post-container\">\n  <div class=\"trip-post-content-container\">\n    <div class=\"trip-title-container\">\n      <h2 class=\"trip-post-tite\">Trip to "
    + alias4(((helper = (helper = lookupProperty(helpers,"location") || (depth0 != null ? lookupProperty(depth0,"location") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location","hash":{},"data":data,"loc":{"start":{"line":4,"column":41},"end":{"line":4,"column":53}}}) : helper)))
    + "</h2\n    </div>\n    <div class=\"trip-dates-container\">\n      <h2 class=\"trip-dates\">Start date: "
    + alias4(((helper = (helper = lookupProperty(helpers,"startDate") || (depth0 != null ? lookupProperty(depth0,"startDate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"startDate","hash":{},"data":data,"loc":{"start":{"line":7,"column":41},"end":{"line":7,"column":54}}}) : helper)))
    + " End date: "
    + alias4(((helper = (helper = lookupProperty(helpers,"endDate") || (depth0 != null ? lookupProperty(depth0,"endDate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"endDate","hash":{},"data":data,"loc":{"start":{"line":7,"column":65},"end":{"line":7,"column":76}}}) : helper)))
    + "</h2>\n    </div>\n    <div class=\"trip-time-container\">\n      <h2 class=\"trip length\">Trip length: "
    + alias4(((helper = (helper = lookupProperty(helpers,"time") || (depth0 != null ? lookupProperty(depth0,"time") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time","hash":{},"data":data,"loc":{"start":{"line":10,"column":43},"end":{"line":10,"column":51}}}) : helper)))
    + " days</h2>\n    </div>\n    <div class=\"trip-photo-container\">\n      <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tripPhoto") || (depth0 != null ? lookupProperty(depth0,"tripPhoto") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tripPhoto","hash":{},"data":data,"loc":{"start":{"line":13,"column":16},"end":{"line":13,"column":29}}}) : helper)))
    + "\">\n    </div>\n    <div class=\"trip-notes-title-container\">\n      <h2 class=\"notes-title\">Notes:</h2>\n    </div>\n    <div class=\"notes-container\">\n      <p class=\"notes\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"notes") || (depth0 != null ? lookupProperty(depth0,"notes") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"notes","hash":{},"data":data,"loc":{"start":{"line":19,"column":23},"end":{"line":19,"column":32}}}) : helper)))
    + "</p>\n    </div>\n  </div>\n</div> -->\n\n<div class=\"trip\" data-title="
    + alias4(((helper = (helper = lookupProperty(helpers,"location") || (depth0 != null ? lookupProperty(depth0,"location") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location","hash":{},"data":data,"loc":{"start":{"line":24,"column":29},"end":{"line":24,"column":41}}}) : helper)))
    + " data-lat="
    + alias4(((helper = (helper = lookupProperty(helpers,"latitude") || (depth0 != null ? lookupProperty(depth0,"latitude") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"latitude","hash":{},"data":data,"loc":{"start":{"line":24,"column":51},"end":{"line":24,"column":63}}}) : helper)))
    + " data-long="
    + alias4(((helper = (helper = lookupProperty(helpers,"longitude") || (depth0 != null ? lookupProperty(depth0,"longitude") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"longitude","hash":{},"data":data,"loc":{"start":{"line":24,"column":74},"end":{"line":24,"column":87}}}) : helper)))
    + ">\n  <div class=\"trip-contents\">\n    <div class=\"trip-remove-container\">\n      <button type=\"button\" id=\"\" class=\"trip-remove\">X</button>\n    </div>\n    <div class=\"trip-image-container\">\n      <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"tripPostImage") || (depth0 != null ? lookupProperty(depth0,"tripPostImage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tripPostImage","hash":{},"data":data,"loc":{"start":{"line":30,"column":15},"end":{"line":30,"column":32}}}) : helper)))
    + ">\n    </div>\n    <div class=\"trip-info-container\">\n      Trip to: <button type=\"button\" id=\"0\" class=\"trip-title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"location") || (depth0 != null ? lookupProperty(depth0,"location") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location","hash":{},"data":data,"loc":{"start":{"line":33,"column":63},"end":{"line":33,"column":75}}}) : helper)))
    + "</button>\n      <div class=\"trip-date\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"tripStartDate") || (depth0 != null ? lookupProperty(depth0,"tripStartDate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tripStartDate","hash":{},"data":data,"loc":{"start":{"line":34,"column":29},"end":{"line":34,"column":46}}}) : helper)))
    + " to "
    + alias4(((helper = (helper = lookupProperty(helpers,"tripEndDate") || (depth0 != null ? lookupProperty(depth0,"tripEndDate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tripEndDate","hash":{},"data":data,"loc":{"start":{"line":34,"column":50},"end":{"line":34,"column":65}}}) : helper)))
    + "</div>\n            <div class=\"trip length\">Trip length: "
    + alias4(((helper = (helper = lookupProperty(helpers,"time") || (depth0 != null ? lookupProperty(depth0,"time") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time","hash":{},"data":data,"loc":{"start":{"line":35,"column":50},"end":{"line":35,"column":58}}}) : helper)))
    + " days</div>\n      <div class=\"trip-location\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"location") || (depth0 != null ? lookupProperty(depth0,"location") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location","hash":{},"data":data,"loc":{"start":{"line":36,"column":33},"end":{"line":36,"column":45}}}) : helper)))
    + "</div>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
})();