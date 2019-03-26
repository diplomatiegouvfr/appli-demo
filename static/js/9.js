webpackJsonp([9],{303:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=r(0),o=r(844),s=r(52),u=r(333),a=r(15),l=r(56),c=r(54),R=(i.Utils.getLogger("applitutoriel.src.routes.ref.ref-server-routes"),function(e){function t(){var t=e.call(this)||this;return t.addDataRoute(a.URL_REF_VILLES,function(){return new s.DataRouteInfos(o.ListerVilles,null,c.Injector.getRegistered(l.ReferentielPaysService))},u.Roles.EVERYONE),t.addDataRoute(a.URL_PAYS,function(){return new s.DataRouteInfos(o.ListerPays,null,c.Injector.getRegistered(l.ReferentielPaysService))},u.Roles.EVERYONE),t.addDataRoute(a.URL_REF_NATIONALITE,function(){return new s.DataRouteInfos(o.ListerNationalites,null,c.Injector.getRegistered(l.ReferentielPaysService))},u.Roles.EVERYONE),t.addDataRoute(a.URL_REF_NATIONALITE+"/recherche",function(e){return new s.DataRouteInfos(o.ListerNationalites,null,c.Injector.getRegistered(l.ReferentielPaysService))},u.Roles.ADMIN,"post"),t}return n.__extends(t,e),t}(s.AbstractRoutes));
/**
 * applitutoriel-js-lite - Application tutoriel utilisant le Framework hornet
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.3.0
 * @link git+https://github.com/diplomatiegouvfr/applitutoriel-modules.git
 * @license CECILL-2.1
 */t.default=R},333:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});
/**
 * applitutoriel-js-common - Application tutoriel utilisant le Framework hornet
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.3.0
 * @link git+https://github.com/diplomatiegouvfr/applitutoriel-modules.git
 * @license CECILL-2.1
 */
var n=function(){function e(){}return e.USER_STR="APPLI_TUTO_USER",e.ADMIN_STR="APPLI_TUTO_ADMIN",e.USER=[e.USER_STR],e.ADMIN=[e.ADMIN_STR],e.EVERYONE=[e.USER_STR,e.ADMIN_STR],e}();t.Roles=n},844:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=r(0),o=r(52),s=i.Utils.getLogger("applitutoriel.actions.ref.ref-actions"),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.execute=function(){return this.getService().listerPays()},t}(o.RouteActionService);
/**
 * applitutoriel-js-common - Application tutoriel utilisant le Framework hornet
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.3.0
 * @link git+https://github.com/diplomatiegouvfr/applitutoriel-modules.git
 * @license CECILL-2.1
 */t.ListerPays=u;var a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.execute=function(){return s.trace("Action: ListerVilles, appel api villes"),this.getService().listerVilles()},t}(o.RouteActionService);t.ListerVilles=a;var l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.execute=function(){var e={};return this.req.body&&(e=this.getPayload()),this.getService().rechercherNationalites(e.nationalite)},t}(o.RouteActionService);t.ListerNationalites=l}});