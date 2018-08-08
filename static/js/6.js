webpackJsonp([6],{284:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(1),R=n(20),s=n(111),i=n(327),u=n(21),a=n(20),l=n(53),c=(o.Utils.getLogger("applitutoriel.src.routes.ref.ref-routes"),function(e){function t(){var t=e.call(this)||this;return t.addDataRoute(u.URL_REF_VILLES,function(){return new s.DataRouteInfos(R.ListerVilles,null,l.Injector.getRegistered(a.ReferentielPaysService))},i.Roles.EVERYONE),t.addDataRoute(u.URL_PAYS,function(){return new s.DataRouteInfos(R.ListerPays,null,l.Injector.getRegistered(a.ReferentielPaysService))},i.Roles.EVERYONE),t.addDataRoute(u.URL_REF_NATIONALITE,function(){return new s.DataRouteInfos(R.ListerNationalites,null,l.Injector.getRegistered(a.ReferentielPaysService))},i.Roles.EVERYONE),t.addDataRoute(u.URL_REF_NATIONALITE+"/recherche",function(e){return new s.DataRouteInfos(R.ListerNationalites,null,l.Injector.getRegistered(a.ReferentielPaysService))},i.Roles.ADMIN,"post"),t}return r.__extends(t,e),t}(s.AbstractRoutes));t.default=c},327:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});/**
 * applitutoriel-js-common - Application tutoriel utilisant le Framework hornet
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.2.0
 * @link git+https://github.com/diplomatiegouvfr/applitutoriel-modules.git
 * @license CECILL-2.1
 */
var r=function(){function e(){}return e.USER_STR="APPLI_TUTO_USER",e.ADMIN_STR="APPLI_TUTO_ADMIN",e.USER=[e.USER_STR],e.ADMIN=[e.ADMIN_STR],e.EVERYONE=[e.USER_STR,e.ADMIN_STR],e}();t.Roles=r}});
//# sourceMappingURL=6.js.map