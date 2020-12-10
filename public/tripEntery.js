(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tripEntery'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"trip-post-container\">\r\n  <div class=\"trip-post-content-container\">\r\n    <div class=\"trip-title-container\">\r\n      <h2 class=\"trip-post-tite\">Trip to "
    + alias4(((helper = (helper = lookupProperty(helpers,"location") || (depth0 != null ? lookupProperty(depth0,"location") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location","hash":{},"data":data,"loc":{"start":{"line":4,"column":41},"end":{"line":4,"column":53}}}) : helper)))
    + "</h2\r\n    </div>\r\n    <div class=\"trip-dates-container\">\r\n      <h2 class=\"trip-dates\">Start date: "
    + alias4(((helper = (helper = lookupProperty(helpers,"startDate") || (depth0 != null ? lookupProperty(depth0,"startDate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"startDate","hash":{},"data":data,"loc":{"start":{"line":7,"column":41},"end":{"line":7,"column":54}}}) : helper)))
    + " End date: "
    + alias4(((helper = (helper = lookupProperty(helpers,"endDate") || (depth0 != null ? lookupProperty(depth0,"endDate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"endDate","hash":{},"data":data,"loc":{"start":{"line":7,"column":65},"end":{"line":7,"column":76}}}) : helper)))
    + "</h2>\r\n    </div>\r\n    <div class=\"trip-time-container\">\r\n      <h2 class=\"trip length\">Trip length: "
    + alias4(((helper = (helper = lookupProperty(helpers,"time") || (depth0 != null ? lookupProperty(depth0,"time") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time","hash":{},"data":data,"loc":{"start":{"line":10,"column":43},"end":{"line":10,"column":51}}}) : helper)))
    + " days</h2>\r\n    </div>\r\n    <div class=\"trip-photo-container\">\r\n      <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"tripPhoto") || (depth0 != null ? lookupProperty(depth0,"tripPhoto") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tripPhoto","hash":{},"data":data,"loc":{"start":{"line":13,"column":16},"end":{"line":13,"column":29}}}) : helper)))
    + "\">\r\n    </div>\r\n    <div class=\"trip-notes-title-container\">\r\n      <h2 class=\"notes-title\">Notes:</h2>\r\n    </div>\r\n    <div class=\"notes-container\">\r\n      <p class=\"notes\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"notes") || (depth0 != null ? lookupProperty(depth0,"notes") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"notes","hash":{},"data":data,"loc":{"start":{"line":19,"column":23},"end":{"line":19,"column":32}}}) : helper)))
    + "</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
})();