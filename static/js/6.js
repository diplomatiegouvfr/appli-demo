webpackJsonp([6],{305:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(1),s=n(58),u=n(120),o=n(352),R=n(19),a=n(642),l=n(60),c=(i.Utils.getLogger("applitutoriel.src.routes.ref.ref-routes"),function(e){function t(){var t=e.call(this)||this;return t.addDataRoute(R.URL_REF_VILLES,function(){return new u.DataRouteInfos(s.ListerVilles,null,l.Injector.getRegistered(a.ReferentielPaysService))},o.Roles.EVERYONE),t.addDataRoute(R.URL_PAYS,function(){return new u.DataRouteInfos(s.ListerPays,null,l.Injector.getRegistered(a.ReferentielPaysService))},o.Roles.EVERYONE),t.addDataRoute(R.URL_REF_NATIONALITE,function(){return new u.DataRouteInfos(s.ListerNationalites,null,l.Injector.getRegistered(a.ReferentielPaysService))},o.Roles.EVERYONE),t.addDataRoute(R.URL_REF_NATIONALITE+"/recherche",function(e){return new u.DataRouteInfos(s.ListerNationalites,null,l.Injector.getRegistered(a.ReferentielPaysService))},o.Roles.ADMIN,"post"),t}return r.__extends(t,e),t}(u.AbstractRoutes));
/**
 * applitutoriel-js - Application tutoriel utilisant le Framework hornet
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.2.4
 * @link git+https://github.com/diplomatiegouvfr/applitutoriel-modules.git
 * @license CECILL-2.1
 */t.default=c},352:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});
/**
 * applitutoriel-js-common - Application tutoriel utilisant le Framework hornet
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.2.4
 * @link git+https://github.com/diplomatiegouvfr/applitutoriel-modules.git
 * @license CECILL-2.1
 */
var r=function(){function e(){}return e.USER_STR="APPLI_TUTO_USER",e.ADMIN_STR="APPLI_TUTO_ADMIN",e.USER=[e.USER_STR],e.ADMIN=[e.ADMIN_STR],e.EVERYONE=[e.USER_STR,e.ADMIN_STR],e}();t.Roles=r},642:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t}(n(13).ServiceRequest);
/**
 * applitutoriel-js-common - Application tutoriel utilisant le Framework hornet
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.2.4
 * @link git+https://github.com/diplomatiegouvfr/applitutoriel-modules.git
 * @license CECILL-2.1
 */t.ReferentielPaysService=i}});