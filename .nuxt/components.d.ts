
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
interface _GlobalComponents {
      'BannerBottomBanner': typeof import("../components/banner/BottomBanner.vue")['default']
    'BannerMainBanner': typeof import("../components/banner/MainBanner.vue")['default']
    'LayoutAppFooter': typeof import("../components/layout/AppFooter.vue")['default']
    'LayoutAppHeader': typeof import("../components/layout/AppHeader.vue")['default']
    'LayoutPageTitle': typeof import("../components/layout/PageTitle.vue")['default']
    'LayoutSiteMap': typeof import("../components/layout/SiteMap.vue")['default']
    'PageMaintab': typeof import("../components/page/Maintab.vue")['default']
    'PageServicetab': typeof import("../components/page/Servicetab.vue")['default']
    'PageSubtab': typeof import("../components/page/Subtab.vue")['default']
    'PageChangepointChangepointdis': typeof import("../components/page/changepoint/Changepointdis.vue")['default']
    'PageChangepointChangepointsla': typeof import("../components/page/changepoint/Changepointsla.vue")['default']
    'PageChangepointChangepointspeed': typeof import("../components/page/changepoint/Changepointspeed.vue")['default']
    'PageChangepointChangeservice': typeof import("../components/page/changepoint/Changeservice.vue")['default']
    'PageLeasedBackbone': typeof import("../components/page/leased/Backbone.vue")['default']
    'PageLeasedBasic': typeof import("../components/page/leased/Basic.vue")['default']
    'PageLeasedInfra': typeof import("../components/page/leased/Infra.vue")['default']
    'PageLeasedBackbonePrice': typeof import("../components/page/leased/backbone/Price.vue")['default']
    'PageLeasedBackboneService': typeof import("../components/page/leased/backbone/Service.vue")['default']
    'PageLeasedBasicPrice': typeof import("../components/page/leased/basic/Price.vue")['default']
    'PageLeasedBasicService': typeof import("../components/page/leased/basic/Service.vue")['default']
    'PageServiceAservice': typeof import("../components/page/service/Aservice.vue")['default']
    'PageServiceBservice': typeof import("../components/page/service/Bservice.vue")['default']
    'PageServiceCservice': typeof import("../components/page/service/Cservice.vue")['default']
    'PageServiceDservice': typeof import("../components/page/service/Dservice.vue")['default']
    'PageServiceEservice': typeof import("../components/page/service/Eservice.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyBannerBottomBanner': typeof import("../components/banner/BottomBanner.vue")['default']
    'LazyBannerMainBanner': typeof import("../components/banner/MainBanner.vue")['default']
    'LazyLayoutAppFooter': typeof import("../components/layout/AppFooter.vue")['default']
    'LazyLayoutAppHeader': typeof import("../components/layout/AppHeader.vue")['default']
    'LazyLayoutPageTitle': typeof import("../components/layout/PageTitle.vue")['default']
    'LazyLayoutSiteMap': typeof import("../components/layout/SiteMap.vue")['default']
    'LazyPageMaintab': typeof import("../components/page/Maintab.vue")['default']
    'LazyPageServicetab': typeof import("../components/page/Servicetab.vue")['default']
    'LazyPageSubtab': typeof import("../components/page/Subtab.vue")['default']
    'LazyPageChangepointChangepointdis': typeof import("../components/page/changepoint/Changepointdis.vue")['default']
    'LazyPageChangepointChangepointsla': typeof import("../components/page/changepoint/Changepointsla.vue")['default']
    'LazyPageChangepointChangepointspeed': typeof import("../components/page/changepoint/Changepointspeed.vue")['default']
    'LazyPageChangepointChangeservice': typeof import("../components/page/changepoint/Changeservice.vue")['default']
    'LazyPageLeasedBackbone': typeof import("../components/page/leased/Backbone.vue")['default']
    'LazyPageLeasedBasic': typeof import("../components/page/leased/Basic.vue")['default']
    'LazyPageLeasedInfra': typeof import("../components/page/leased/Infra.vue")['default']
    'LazyPageLeasedBackbonePrice': typeof import("../components/page/leased/backbone/Price.vue")['default']
    'LazyPageLeasedBackboneService': typeof import("../components/page/leased/backbone/Service.vue")['default']
    'LazyPageLeasedBasicPrice': typeof import("../components/page/leased/basic/Price.vue")['default']
    'LazyPageLeasedBasicService': typeof import("../components/page/leased/basic/Service.vue")['default']
    'LazyPageServiceAservice': typeof import("../components/page/service/Aservice.vue")['default']
    'LazyPageServiceBservice': typeof import("../components/page/service/Bservice.vue")['default']
    'LazyPageServiceCservice': typeof import("../components/page/service/Cservice.vue")['default']
    'LazyPageServiceDservice': typeof import("../components/page/service/Dservice.vue")['default']
    'LazyPageServiceEservice': typeof import("../components/page/service/Eservice.vue")['default']
    'LazyNuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome")['default']
    'LazyNuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'LazyNuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'LazyClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'LazyDevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'LazyServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'LazyNuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'LazyNuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'LazyNuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'LazyNuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'LazyNuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'LazyNuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'LazyNoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'LazyLink': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'LazyBase': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'LazyTitle': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'LazyMeta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'LazyStyle': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'LazyHead': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'LazyHtml': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'LazyBody': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'LazyNuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'LazyNuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents extends _GlobalComponents { }
}

declare module '@vue/runtime-dom' {
  export interface GlobalComponents extends _GlobalComponents { }
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const BannerBottomBanner: typeof import("../components/banner/BottomBanner.vue")['default']
export const BannerMainBanner: typeof import("../components/banner/MainBanner.vue")['default']
export const LayoutAppFooter: typeof import("../components/layout/AppFooter.vue")['default']
export const LayoutAppHeader: typeof import("../components/layout/AppHeader.vue")['default']
export const LayoutPageTitle: typeof import("../components/layout/PageTitle.vue")['default']
export const LayoutSiteMap: typeof import("../components/layout/SiteMap.vue")['default']
export const PageMaintab: typeof import("../components/page/Maintab.vue")['default']
export const PageServicetab: typeof import("../components/page/Servicetab.vue")['default']
export const PageSubtab: typeof import("../components/page/Subtab.vue")['default']
export const PageChangepointChangepointdis: typeof import("../components/page/changepoint/Changepointdis.vue")['default']
export const PageChangepointChangepointsla: typeof import("../components/page/changepoint/Changepointsla.vue")['default']
export const PageChangepointChangepointspeed: typeof import("../components/page/changepoint/Changepointspeed.vue")['default']
export const PageChangepointChangeservice: typeof import("../components/page/changepoint/Changeservice.vue")['default']
export const PageLeasedBackbone: typeof import("../components/page/leased/Backbone.vue")['default']
export const PageLeasedBasic: typeof import("../components/page/leased/Basic.vue")['default']
export const PageLeasedInfra: typeof import("../components/page/leased/Infra.vue")['default']
export const PageLeasedBackbonePrice: typeof import("../components/page/leased/backbone/Price.vue")['default']
export const PageLeasedBackboneService: typeof import("../components/page/leased/backbone/Service.vue")['default']
export const PageLeasedBasicPrice: typeof import("../components/page/leased/basic/Price.vue")['default']
export const PageLeasedBasicService: typeof import("../components/page/leased/basic/Service.vue")['default']
export const PageServiceAservice: typeof import("../components/page/service/Aservice.vue")['default']
export const PageServiceBservice: typeof import("../components/page/service/Bservice.vue")['default']
export const PageServiceCservice: typeof import("../components/page/service/Cservice.vue")['default']
export const PageServiceDservice: typeof import("../components/page/service/Dservice.vue")['default']
export const PageServiceEservice: typeof import("../components/page/service/Eservice.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyBannerBottomBanner: typeof import("../components/banner/BottomBanner.vue")['default']
export const LazyBannerMainBanner: typeof import("../components/banner/MainBanner.vue")['default']
export const LazyLayoutAppFooter: typeof import("../components/layout/AppFooter.vue")['default']
export const LazyLayoutAppHeader: typeof import("../components/layout/AppHeader.vue")['default']
export const LazyLayoutPageTitle: typeof import("../components/layout/PageTitle.vue")['default']
export const LazyLayoutSiteMap: typeof import("../components/layout/SiteMap.vue")['default']
export const LazyPageMaintab: typeof import("../components/page/Maintab.vue")['default']
export const LazyPageServicetab: typeof import("../components/page/Servicetab.vue")['default']
export const LazyPageSubtab: typeof import("../components/page/Subtab.vue")['default']
export const LazyPageChangepointChangepointdis: typeof import("../components/page/changepoint/Changepointdis.vue")['default']
export const LazyPageChangepointChangepointsla: typeof import("../components/page/changepoint/Changepointsla.vue")['default']
export const LazyPageChangepointChangepointspeed: typeof import("../components/page/changepoint/Changepointspeed.vue")['default']
export const LazyPageChangepointChangeservice: typeof import("../components/page/changepoint/Changeservice.vue")['default']
export const LazyPageLeasedBackbone: typeof import("../components/page/leased/Backbone.vue")['default']
export const LazyPageLeasedBasic: typeof import("../components/page/leased/Basic.vue")['default']
export const LazyPageLeasedInfra: typeof import("../components/page/leased/Infra.vue")['default']
export const LazyPageLeasedBackbonePrice: typeof import("../components/page/leased/backbone/Price.vue")['default']
export const LazyPageLeasedBackboneService: typeof import("../components/page/leased/backbone/Service.vue")['default']
export const LazyPageLeasedBasicPrice: typeof import("../components/page/leased/basic/Price.vue")['default']
export const LazyPageLeasedBasicService: typeof import("../components/page/leased/basic/Service.vue")['default']
export const LazyPageServiceAservice: typeof import("../components/page/service/Aservice.vue")['default']
export const LazyPageServiceBservice: typeof import("../components/page/service/Bservice.vue")['default']
export const LazyPageServiceCservice: typeof import("../components/page/service/Cservice.vue")['default']
export const LazyPageServiceDservice: typeof import("../components/page/service/Dservice.vue")['default']
export const LazyPageServiceEservice: typeof import("../components/page/service/Eservice.vue")['default']
export const LazyNuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome")['default']
export const LazyNuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const LazyNuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const LazyClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const LazyDevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const LazyServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyNuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const LazyNuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const LazyNuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const LazyNuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const LazyNuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const LazyNuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const LazyNoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const LazyLink: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const LazyBase: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const LazyTitle: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const LazyMeta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const LazyStyle: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const LazyHead: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const LazyHtml: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const LazyBody: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const LazyNuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyNuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
