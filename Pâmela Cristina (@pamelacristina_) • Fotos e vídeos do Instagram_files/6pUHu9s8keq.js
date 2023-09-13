;/*FB_PKG_DELIM*/

__d("useCounter",["react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useMemo,i=b.useState;function a(a){a===void 0&&(a=0);a=i(a);var b=a[0],c=a[1];a=h(function(){return{changeBy:function(a){return c(function(b){return b+a})},decrement:function(){return c(function(a){return a-1})},increment:function(){return c(function(a){return a+1})},set:c}},[c]);return[b,a]}g["default"]=a}),98);
__d("usePolarisGetQueryRefetcher",["react","useCounter","usePolarisQueryStore"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback;function a(a){var b=c("useCounter")();b[0];var d=b[1].increment,e=c("usePolarisQueryStore")();return h(function(b){e.refetchGetQuery(a,b),d()},[d,a,e])}g["default"]=a}),98);
__d("PolarisDynamicExploreLoadingSpinner.react",["IGDSSpinner.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(){return h.jsx(c("IGDSSpinner.react"),{position:"absolute",size:"medium"})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisDynamicExploreGridItemOverlay.react",["PolarisDynamicExploreMediaHelpers","PolarisPostsGridItemStatsOverlay.react","PolarisShouldHideLikeCountsWithControls","nullthrows","polarisDynamicExploreSelectors","react","usePolarisSelector","usePolarisViewer"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.exploreGridQuery,e=a.exploreGridType,f=a.postId;a=c("usePolarisViewer")();var g=c("nullthrows")(c("usePolarisSelector")(function(a){return d("polarisDynamicExploreSelectors").getGridItemFromPostId(a,f,e,b)}));return h.jsx(c("PolarisPostsGridItemStatsOverlay.react"),{commentsDisabled:g.comments_disabled,hideLikes:d("PolarisShouldHideLikeCountsWithControls").shouldHideLikeCountsWithControls(a==null?void 0:a.hideLikeAndViewCounts,g.like_and_view_counts_disabled),isVideo:d("PolarisDynamicExploreMediaHelpers").getIsVideo(g),numComments:g.comment_count,numPreviewLikes:g.like_count,videoViews:g.view_count})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisDynamicExploreGridItem.react",["IGDSBox.react","PolarisDynamicExploreGridItemOverlay.react","PolarisDynamicExploreMediaHelpers","PolarisErrorBoundary.react","PolarisFastLink.react","PolarisGridItemVideoPreview.react","PolarisMediaConstants","PolarisMediaTypes","PolarisPhoto.react","PolarisPostsGridQEHelpers","PolarisReactRedux","PolarisSizing","PolarisUA","PolarisViewpointReact.react","getPolarisVideoSourceByVersions","nullthrows","polarisDynamicExploreSelectors","polarisIsUserLoggedIn","qex","react","stylex","usePolarisDisplayProperties"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useEffect,k=b.useState,l={iconWrapper:{alignItems:"xuk3077",bottom:"x1ey2m1c",boxSizing:"x9f619",display:"x78zum5",end:"xds687c",flexDirection:"xdt5ytf",flexShrink:"x2lah0s",justifyContent:"x1nhvcw1",marginTop:"x1ok221b",marginEnd:"x1t4t16n",marginBottom:"xat24cr",marginStart:"x1mh8g0r",paddingTop:"xexx8yu",paddingEnd:"x4uap5",paddingBottom:"x18d9i69",paddingStart:"xkhd6sd",pointerEvents:"x47corl",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",verticalAlign:"x11njtxf","@media (min-width: 736px)_marginTop":"x1rxg9gp","@media (min-width: 736px)_marginEnd":"x11sgtky","@media (min-width: 736px)_marginBottom":"xsybdxg","@media (min-width: 736px)_marginStart":"x1bzgcud",$$css:!0},link:{":active_opacity":"x4gyw5p",$$css:!0},oneByTwoPlaceholder:{paddingBottom:"x1hgrsv6","@media (min-width: 736px)_paddingBottom":"x1azhor3",$$css:!0},oneByTwoPlaceholder4px:{paddingBottom:"x1hgrsv6","@media (min-width: 736px)_paddingBottom":"xw0xz5u",$$css:!0},videoPreview:{height:"x5yr21d",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",width:"xh8yej3",$$css:!0},videoPreviewWrapper:{paddingBottom:"xs9ks74",$$css:!0},videoPreviewWrapper28px:{"@media (min-width: 736px)_paddingBottom":"x1azhor3",$$css:!0},videoPreviewWrapper4px:{"@media (min-width: 736px)_paddingBottom":"xw0xz5u",$$css:!0}};function a(a){a.analyticsContext;var b=a.constructedLink,e=a.exploreGridQuery,f=a.exploreGridType,g=a.id,m=a.onClick,n=a.onMediaRendered,o=a.size;a=a.viewpointActions;var p=k(!1),q=p[0],r=p[1];p=k(!1);var s=p[0],t=p[1];p=k(!1);var u=p[0],v=p[1];p=c("nullthrows")(d("PolarisReactRedux").useSelector(function(a){return d("polarisDynamicExploreSelectors").getGridItemFromPostId(a,g,f,e)}));var w=d("PolarisDynamicExploreMediaHelpers").getSrcSet(p),x=p.media_type===d("PolarisMediaConstants").MediaTypes.VIDEO,y=c("getPolarisVideoSourceByVersions")(p.video_versions,[d("PolarisMediaTypes").MediaVersionType.VIDEO_480_HIGH,d("PolarisMediaTypes").MediaVersionType.VIDEO_480_LOW]),z=function(a,b){n&&n(g,b)},A=c("usePolarisDisplayProperties")();A=A.viewportWidth;A=A>d("PolarisSizing").MEDIUM_SCREEN_MIN;q=d("PolarisUA").isDesktop()&&(q&&!u||s);var B=d("PolarisViewpointReact.react").useViewpoint({action:a,id:g}),C=i(function(){v(!1)},[]);u=d("PolarisDynamicExploreMediaHelpers").getPostIcon(p);s=d("PolarisPostsGridQEHelpers").getMarginForPostsGridItems();j(function(){var a=B.current;if(!a)return function(){};a.addEventListener("keyup",C);return function(){a.removeEventListener("keyup",C)}},[C,B]);return h.jsx(c("IGDSBox.react"),{containerRef:B,"data-testid":void 0,display:"block",position:"relative",width:"100%",children:h.jsxs(c("PolarisFastLink.react"),{className:"x4gyw5p",href:b,onBlur:function(){return r(!1)},onClick:function(a){a.detail===1&&v(!0),m&&m(a)},onFocus:function(){return r(!0)},onMouseEnter:function(){return t(!0)},onMouseLeave:function(){return t(!1)},shouldOpenModal:d("PolarisUA").isDesktop()&&d("polarisIsUserLoggedIn").isUserLoggedIn(),children:[x&&o===d("PolarisDynamicExploreMediaHelpers").GRID_ITEM_SIZE.ONE_BY_TWO&&y!=null&&c("qex")._("35")===!0?h.jsx("div",{className:c("stylex")([l.videoPreviewWrapper,s===28&&l.videoPreviewWrapper28px,s===4&&l.videoPreviewWrapper4px]),children:h.jsx("div",{className:"x5yr21d x10l6tqk x17qophe x13vifvy xh8yej3",children:h.jsx(c("PolarisGridItemVideoPreview.react"),{coverPhoto:p==null?void 0:(a=p.image_versions2)==null?void 0:(b=a.additional_candidates)==null?void 0:(x=b.first_frame)==null?void 0:x.url,videoID:g,videoSrc:y})})}):h.jsx(c("PolarisPhoto.react"),{accessibilityCaption:d("PolarisDynamicExploreMediaHelpers").getAccessibilityCaption(p),caption:d("PolarisDynamicExploreMediaHelpers").getPostCaption(p),onPhotoRendered:z,placeholderClassName:c("stylex")(o===d("PolarisDynamicExploreMediaHelpers").GRID_ITEM_SIZE.ONE_BY_TWO&&s===28&&l.oneByTwoPlaceholder,o===d("PolarisDynamicExploreMediaHelpers").GRID_ITEM_SIZE.ONE_BY_TWO&&s===4&&l.oneByTwoPlaceholder4px),rich:!0,src:c("nullthrows")(w[0]).src,srcSet:w}),u&&h.jsx("div",{className:"xuk3077 x1ey2m1c x9f619 x78zum5 xds687c xdt5ytf x2lah0s x1nhvcw1 x1ok221b x1t4t16n xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x47corl x10l6tqk x17qophe x13vifvy x11njtxf x1rxg9gp x11sgtky xsybdxg x1bzgcud",children:h.jsx(u.icon,{alt:u.alt,color:"ig-stroke-on-media",shadow:!0,size:A?24:18})}),q&&h.jsx(c("PolarisErrorBoundary.react"),{errorRenderer:function(){return null},children:h.jsx(c("PolarisDynamicExploreGridItemOverlay.react"),{exploreGridQuery:e,exploreGridType:f,postId:g})})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisPPRLoggedDynamicExploreGridItem",["PolarisDynamicExploreGridItem.react","polarisWithPPRLogging"],(function(a,b,c,d,e,f,g){"use strict";a=c("polarisWithPPRLogging")(c("PolarisDynamicExploreGridItem.react"));g["default"]=a}),98);
__d("PolarisDynamicExploreSectionalItem.react",["IGDSBox.react","PolarisDynamicExploreMediaHelpers","PolarisPPRLoggedDynamicExploreGridItem","PolarisPostsGridQEHelpers","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={baseItem:{alignItems:"x1qjc9v5",borderTopWidth:"x972fbf",borderEndWidth:"xcfux6l",borderBottomWidth:"x1qhh985",borderStartWidth:"xm0m39n",boxSizing:"x9f619",display:"x1lliihq",flexDirection:"xdt5ytf",flexShrink:"x2lah0s","float":"xrbpyxo",marginTop:"x1a7h2tk",marginEnd:"x14miiyz",marginBottom:"xat24cr",marginStart:"x1mh8g0r",paddingTop:"xexx8yu",paddingEnd:"x4uap5",paddingBottom:"x18d9i69",paddingStart:"xkhd6sd",position:"x1n2onr6",verticalAlign:"x11njtxf",width:"x1bfs520",$$css:!0},item:{"@media (min-width: 736px)_marginTop":"xph46j","@media (min-width: 736px)_marginEnd":"x1wrihxl","@media (min-width: 736px)_marginBottom":"x1xo4fhm","@media (min-width: 736px)_marginStart":"x1bzgcud","@media (min-width: 736px)_width":"x15uqtui",$$css:!0},item4px:{"@media (min-width: 736px)_marginTop":"xph46j","@media (min-width: 736px)_marginEnd":"x9i3mqj","@media (min-width: 736px)_marginBottom":"xcghwft","@media (min-width: 736px)_marginStart":"x1bzgcud","@media (min-width: 736px)_width":"xhdunbi",$$css:!0},itemLeft:{"float":"xrbpyxo",$$css:!0},itemRight:{"float":"x1guec7k",$$css:!0},oneByTwoItem:{width:"x1bfs520","@media (min-width: 736px)_width":"x15uqtui",$$css:!0},oneByTwoItem4px:{width:"x1bfs520","@media (min-width: 736px)_width":"xhdunbi",$$css:!0},twoByTwoItem:{width:"xgczaz5","@media (min-width: 736px)_width":"xibe6o0",$$css:!0},twoByTwoItem4px:{width:"xgczaz5","@media (min-width: 736px)_width":"x1rzo0p5",$$css:!0}};function a(a){var b=a.analyticsContext,e=a.exploreGridQuery,f=a.exploreGridType,g=a.isVisible,j=a.logGridItemImpression,k=a.mediaLinkBuilder,l=a.onGridItemClick;a=a.sectionalItem;a.feed_type;a.id;var m=a.layout_content,n=a.layout_type,o=function(a){return function(b){l&&l(b,a,a.row,a.column)}},p=function(a){return!k?null:k(a)},q=function(a){var b=a.item;a=a.size;return j!=null?[j(b,a)]:[]};a=d("PolarisDynamicExploreMediaHelpers").getGridItemPlacement(n);var r=a.position;a=a.size;var s=m.fill_items;m=m.primary_item;var t=d("PolarisPostsGridQEHelpers").getMarginForPostsGridItems();return h.jsxs(c("IGDSBox.react"),{display:"block",position:"relative",children:[m!=null&&h.jsx("div",{className:c("stylex")(i.baseItem,t===28&&i.item,t===4&&i.item4px,a===d("PolarisDynamicExploreMediaHelpers").GRID_ITEM_SIZE.ONE_BY_TWO&&t===28&&i.oneByTwoItem,a===d("PolarisDynamicExploreMediaHelpers").GRID_ITEM_SIZE.ONE_BY_TWO&&t===4&&i.oneByTwoItem4px,a===d("PolarisDynamicExploreMediaHelpers").GRID_ITEM_SIZE.TWO_BY_TWO&&t===28&&i.twoByTwoItem,a===d("PolarisDynamicExploreMediaHelpers").GRID_ITEM_SIZE.TWO_BY_TWO&&t===4&&i.twoByTwoItem4px,r===d("PolarisDynamicExploreMediaHelpers").GRID_ITEM_POSITION.LEFT&&i.itemLeft,r===d("PolarisDynamicExploreMediaHelpers").GRID_ITEM_POSITION.RIGHT&&i.itemRight),children:h.jsx(c("PolarisPPRLoggedDynamicExploreGridItem"),{analyticsContext:b,constructedLink:p(m),exploreGridQuery:e,exploreGridType:f,id:d("PolarisDynamicExploreMediaHelpers").getPostId(m),isGridView:!0,isVisible:g,mediaLinkBuilder:k,onClick:o(m),size:a,viewpointActions:q({item:m,size:a})})}),s.map(function(a,j){return h.jsx("div",{className:c("stylex")(i.baseItem,t===28&&i.item,t===4&&i.item4px),children:h.jsx(c("PolarisPPRLoggedDynamicExploreGridItem"),{analyticsContext:b,constructedLink:p(a),exploreGridQuery:e,exploreGridType:f,id:d("PolarisDynamicExploreMediaHelpers").getPostId(a),isGridView:!0,isVisible:g,mediaLinkBuilder:k,onClick:o(a),size:d("PolarisDynamicExploreMediaHelpers").getGridFillItemsSize(n),viewpointActions:q({item:a,size:d("PolarisDynamicExploreMediaHelpers").GRID_ITEM_SIZE.ONE_BY_ONE})})},a.id)})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisDynamicExploreGrid.react",["PolarisDynamicExploreLoadingSpinner.react","PolarisDynamicExploreSectionalItem.react","PolarisErrorRetrySection.react","PolarisGenericVirtualFeed.react","PolarisSizeCache","PolarisUA","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=800;var i=1,j=1,k=1.5,l=6,m={list:{display:"x78zum5",flexDirection:"xdt5ytf",marginEnd:"xwrv7xz",position:"x1n2onr6","@media (min-width: 736px)_marginTop":"xph46j","@media (min-width: 736px)_marginEnd":"xfcsdxf","@media (min-width: 736px)_marginBottom":"xsybdxg","@media (min-width: 736px)_marginStart":"x1bzgcud",$$css:!0},listLoggedOut:{display:"x78zum5",flexDirection:"xdt5ytf",marginEnd:"xwrv7xz",position:"x1n2onr6",$$css:!0},listWithTopSection:{marginTop:"x7b8966",$$css:!0}},n=new(c("PolarisSizeCache"))({estimatedSize:b});function a(a){var b=a.analyticsContext,e=a.exploreGridQuery,g=a.exploreGridType,o=a.hasNextPage,p=a.hasTopRefinementsSection,q=a.isFetching,r=a.isLoggedOut;r=r===void 0?!1:r;var s=a.logGridItemImpression,t=a.mediaLinkBuilder,u=a.onGridItemClick,v=a.onNextPage,w=a.onRetry,x=a.sectionalItems;function y(a){return function(b,c,d,e){u&&u(b,c,a,d,e)}}function z(a){var d=a.index;a=a.isVisible;var f=x[d];return h.jsx(c("PolarisDynamicExploreSectionalItem.react"),{analyticsContext:b,exploreGridQuery:e,exploreGridType:g,isVisible:a,logGridItemImpression:s,mediaLinkBuilder:t,onGridItemClick:y(f),sectionalItem:f},d)}z.displayName=z.name+" [from "+f.id+"]";return x.length===0?q?h.jsx(c("PolarisDynamicExploreLoadingSpinner.react"),{}):h.jsx(c("PolarisErrorRetrySection.react"),{onRetry:w}):h.jsx(c("PolarisGenericVirtualFeed.react"),{allowSampledScrollLogging:!0,analyticsContext:b,className:c("stylex")(r?m.listLoggedOut:m.list,p===!0&&m.listWithTopSection),"data-testid":void 0,enablePrefetch:d("PolarisUA").isMobile()!==!0,enablePriorityFetching:!1,hasNextPage:o,initialRenderCount:i,isFetching:q,items:x,nextPageThreshold:j,onNextPage:v,overscanCount:l,prefetchNextPageThreshold:k,renderFeedItem:z,sizeCache:n,visibleCount:x.length})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisExploreVariants",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({FOR_YOU:"for_you",NONPERSONALIZED:"nonpersonalized"});c=a;f["default"]=c}),66);
__d("PolarisDynamicExploreVariantsHelper",["PolarisExploreVariants"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return a==null||c("PolarisExploreVariants").cast(String(a))==="for_you"?!1:!0}g.shouldShowNonPersonalizedExplore=a}),98);
__d("PolarisKeywordExploreStrings",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a=h._("__JHASH__CdKcEifxFn-__JHASH__");b=h._("__JHASH__p3XTyV2187D__JHASH__");c=h._("__JHASH__olQZtTO0Zl4__JHASH__");d=h._("__JHASH__IEYBqphYb44__JHASH__");e=h._("__JHASH__Uu4Dg54Se_q__JHASH__");f=h._("__JHASH__8EIUUA8XAQc__JHASH__");h="for_you";var i="not_personalized";g.NO_KEYWORD_GRID_RESULTS_BODY=a;g.NO_KEYWORD_GRID_RESULTS_HEADER=b;g.NO_KEYWORD_GRID_RESULTS_SEARCH_ICON=c;g.FOR_YOU=d;g.NOT_PERSONALIZED=e;g.DOWN_CHEVRON=f;g.FOR_YOU_KEY=h;g.NOT_PERSONALIZED_KEY=i}),98);
__d("PolarisExplorePagePersonalizationPopoverHeaderItem.react",["CometRouteParams","IGDSButton.react","IGDSChevronDownPanoOutline24Icon","IGDSIconButton.react","IGDSLazyPopoverTrigger.react","JSResourceForInteraction","PolarisDynamicExploreVariantsHelper","PolarisKeywordExploreStrings","emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useEffect,j=b.useState,k={labelMargin:{fontSize:"x1jchvi3",fontWeight:"x117nqv4",marginBottom:"xyorhqc",marginEnd:"x1t4t16n",marginStart:"x17adc0v",marginTop:"x1anpbxc",$$css:!0},noShrink:{flexShrink:"x2lah0s",marginEnd:"xeyog9w",marginStart:"x1orzsq4",$$css:!0},tertiaryTextColor:{color:"xb88cxz",$$css:!0}},l=c("JSResourceForInteraction")("PolarisExplorePagePersonalizationMenu.react").__setRef("PolarisExplorePagePersonalizationPopoverHeaderItem.react");function a(a){var b=a.currentKeyword;a=d("CometRouteParams").useRouteParams();a=a.variant;var e=d("PolarisDynamicExploreVariantsHelper").shouldShowNonPersonalizedExplore(a);a=j(e?d("PolarisKeywordExploreStrings").NOT_PERSONALIZED_KEY:d("PolarisKeywordExploreStrings").FOR_YOU_KEY);var f=a[0],g=a[1];a=j(!1);var m=a[0],n=a[1];i(function(){return e?g("not_personalized"):g("for_you")},[e]);return h.jsx(c("IGDSLazyPopoverTrigger.react"),{align:"start",popoverProps:{keyword:b,onClose:c("emptyFunction"),parentState:f,setParentState:g},popoverResource:l,position:"below",preloadTrigger:"button",children:function(a,e){return h.jsxs(h.Fragment,{children:[h.jsx(c("IGDSButton.react"),{label:f===d("PolarisKeywordExploreStrings").FOR_YOU_KEY?d("PolarisKeywordExploreStrings").FOR_YOU:d("PolarisKeywordExploreStrings").NOT_PERSONALIZED,onClick:function(){m?n(!1):n(!0);return e()},ref:a,size:"large",variant:"secondary_link",xstyle:[k.labelMargin,b!==""&&k.tertiaryTextColor]}),h.jsx(c("IGDSIconButton.react"),{onClick:m?function(){n(!1),c("emptyFunction")()}:function(){n(!0),e()},xstyle:k.noShrink,children:h.jsx(c("IGDSChevronDownPanoOutline24Icon"),{alt:d("PolarisKeywordExploreStrings").DOWN_CHEVRON,color:b===""?"ig-secondary-button":"ig-tertiary-text",size:10})})]})}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisKeywordExplorePillsPlaceholder.react",["IGDSGlimmer.react","range","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={mediaGlimmer:{borderTopStartRadius:"xm3z3ea",borderTopEndRadius:"x1x8b98j",borderBottomEndRadius:"x131883w",borderBottomStartRadius:"x16mih1h",flexShrink:"x2lah0s",height:"xlup9mm",width:"x1247r65",$$css:!0},row:{alignItems:"x6s0dn4",display:"x78zum5",paddingTop:"x1y1aw1k",paddingEnd:"xxbr6pl",paddingBottom:"xwib8y2",paddingStart:"xbbxn1n",$$css:!0}};function a(a){a=a.isNonPersonalizedExplore;return a?null:h.jsx("div",{className:"x6s0dn4 x78zum5 x1y1aw1k xxbr6pl xwib8y2 xbbxn1n",children:c("range")(1,8).map(function(a){return h.jsx("div",{className:"x6s0dn4 x78zum5 x1y1aw1k xxbr6pl xwib8y2 xbbxn1n",children:h.jsx(c("IGDSGlimmer.react"),{index:a,xstyle:i.mediaGlimmer})},a)})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisKeywordSearchRefinementPill.react",["IGDSButton.react","PolarisDynamicExploreActions","PolarisLinkBuilder","PolarisReactRedux","PolarisSearchActions","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.keywordRefinement,e=d("PolarisReactRedux").useDispatch();a=function(){e(d("PolarisDynamicExploreActions").trackKeywordId(b.keywordId,b.keywordName)),e(d("PolarisSearchActions").navigateToSuggestedOrRecentSearch(b.keywordName))};return h.jsx(c("IGDSButton.react"),{display:"block",href:d("PolarisLinkBuilder").getKeywordSearchResultLink(b.keywordName),label:b.displayText,onClick:a,variant:"secondary"})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisKeywordSearchRefinementPillSection.react",["cx","IGDSBox.react","IGDSHeroTab.react","IGDSHeroTabGroup.react","PolarisHSnapScroll.react","PolarisIGVirtualList.react","PolarisKeywordSearchRefinementPill.react","PolarisLinkBuilder","PolarisReactRedux","PolarisUA","emptyFunction","qex","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useMemo;function a(a){var b=a.currentKeyword,e=a.keywordRefinements,f=function(a){return a.reduce(function(a,b){b=b.displayText.split(" ");return a+b.length},0)};a=j(function(){return f(e)},[e]);var g=d("PolarisReactRedux").useSelector(function(a){return a.dynamicExplore.isNonPersonalizedExplore}),h=c("qex")._("889")===!0,k=j(function(){return b!=null?e.find(function(a){return a.displayText===b}):null},[b,e]),l=function(a){a=a.index;a=e[a];return i.jsx(c("IGDSBox.react"),{direction:"column",marginEnd:3,position:"relative",children:i.jsx(c("PolarisKeywordSearchRefinementPill.react"),{keywordRefinement:a})},a.keywordId)};if(d("PolarisUA").isMobile())return i.jsx("div",{className:"_ad3m",children:i.jsx(c("PolarisIGVirtualList.react"),{containerSize:"auto",direction:"horizontal",itemCount:e.length,renderer:l,style:{alignSelf:"center",flexShrink:0}})});return h?i.jsx(i.Fragment,{children:(!g||b!=="")&&i.jsx(c("IGDSBox.react"),{flex:"grow",width:850,children:i.jsx(c("PolarisHSnapScroll.react"),{disableScrollSnap:!0,itemCount:e.length,itemWidth:a>15?110:100,children:i.jsx(c("IGDSHeroTabGroup.react"),{hasDivider:!1,onChange:c("emptyFunction"),value:k==null?void 0:k.keywordId,children:e.map(function(a){return i.jsx(c("IGDSHeroTab.react"),{href:d("PolarisLinkBuilder").getKeywordSearchResultLink(a.keywordName),label:a.displayText,value:a.keywordId},a.keywordId)})})})})}):i.jsx("div",{className:"_ad3n",children:i.jsx(c("IGDSBox.react"),{direction:"row",marginBottom:1,position:"relative",wrap:!0,children:e.map(function(a){return i.jsx(c("IGDSBox.react"),{direction:"column",marginBottom:4,marginEnd:3,position:"relative",children:i.jsx(c("PolarisKeywordSearchRefinementPill.react"),{keywordRefinement:a})},a.keywordId)})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisKeywordSearchExploreHeaderContent.react",["IGDSBox.react","PolarisGenericMobileHeader.react","PolarisIGCoreText","PolarisKeywordExplorePillsPlaceholder.react","PolarisKeywordSearchRefinementPill.react","PolarisKeywordSearchRefinementPillSection.react","PolarisNavBackButton.react","PolarisReactRedux","PolarisStringUtils","PolarisUA","gkx","polarisDynamicExploreSelectors","qex","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.keyword;a=d("PolarisReactRedux").useSelector(function(a){return d("polarisDynamicExploreSelectors").getKeywordRefinementItems(a,b)});var e=d("PolarisReactRedux").useSelector(d("polarisDynamicExploreSelectors").getClusters),f=c("qex")._("889")===!0,g=d("PolarisReactRedux").useSelector(function(a){return a.dynamicExplore.isNonPersonalizedExplore});if(d("PolarisUA").isMobile())return h.jsx(c("PolarisGenericMobileHeader.react"),{leftActions:h.jsx(c("PolarisNavBackButton.react"),{}),title:d("PolarisStringUtils").lowercaseAndCapitalizeFirst(b)});return f?e.length===0&&c("gkx")("4927")===!0?h.jsx(c("PolarisKeywordExplorePillsPlaceholder.react"),{isNonPersonalizedExplore:g}):h.jsx(c("PolarisKeywordSearchRefinementPillSection.react"),{currentKeyword:b,keywordRefinements:e.map(function(a){return{displayText:a.name,keywordId:a.id,keywordName:a.name,position:a.ranked_position}})}):h.jsx("div",{className:"x1qjc9v5 x972fbf xcfux6l x1qhh985 xm0m39n x1afcbsf x78zum5 xdt5ytf x2lah0s xdj266r xkrivgy xat24cr x1gryazu x1fawyso x6tf39o xc73u3c x18d9i69 x5ib6vp x1n2onr6 x11njtxf x19sv2k2",children:h.jsxs(c("IGDSBox.react"),{position:"relative",children:[h.jsx(c("PolarisIGCoreText").Title,{display:"truncated",children:d("PolarisStringUtils").lowercaseAndCapitalizeFirst(b)}),h.jsx(c("IGDSBox.react"),{direction:"row",position:"relative",wrap:!0,children:a.map(function(a){return h.jsx(c("IGDSBox.react"),{direction:"column",marginEnd:3,marginTop:4,position:"relative",children:h.jsx(c("PolarisKeywordSearchRefinementPill.react"),{keywordRefinement:a})},a.keywordId)})})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisKeywordSearchExploreHeaderWithRetry.react",["CometRouteParams","PolarisDynamicExploreActions","PolarisDynamicExploreVariantsHelper","PolarisKeywordSearchExploreHeaderContent.react","react","usePolarisGetQuery","usePolarisGetQuerySetup"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){a=a.keyword;var b=d("CometRouteParams").useRouteParams();b=b.variant;b=d("PolarisDynamicExploreVariantsHelper").shouldShowNonPersonalizedExplore(b);var e=c("usePolarisGetQuery")("/api/v1/discover/web/explore_grid/",{query:{is_nonpersonalized_explore:b}});c("usePolarisGetQuerySetup")(e,d("PolarisDynamicExploreActions").setupDynamicExploreGrid({isNonPersonalizedExplore:b}));return h.jsx(c("PolarisKeywordSearchExploreHeaderContent.react"),{keyword:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisKeywordSearchExploreHeader.react",["CometPlaceholder.react","IGDSBox.react","IGDSDivider.react","PolarisExplorePagePersonalizationPopoverHeaderItem.react","PolarisKeywordExplorePillsPlaceholder.react","PolarisKeywordSearchExploreHeaderContent.react","PolarisKeywordSearchExploreHeaderWithRetry.react","PolarisNavigationLayoutContext","PolarisReactRedux","PolarisScrollawayHeaderWrapper.react","gkx","polarisDynamicExploreSelectors","qex","react","usePolarisNonPersonalizedTabsImpressionLogger"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useContext,j={extraMarginOnGrid:{marginTop:"x1d9vk0g",$$css:!0},scrollawayHeaderWrapper:{maxWidth:"xyzno7u",paddingTop:"x1p5oq8j",width:"xh8yej3",$$css:!0}};function a(a){var b=a.keyword;a=d("PolarisReactRedux").useSelector(function(a){return d("polarisDynamicExploreSelectors").getKeywordRefinementItems(a,b)});var e=d("PolarisReactRedux").useSelector(d("polarisDynamicExploreSelectors").getClusters),f=d("PolarisReactRedux").useSelector(function(a){return a.dynamicExplore.isNonPersonalizedExplore}),g=c("qex")._("889")===!0,k=i(c("PolarisNavigationLayoutContext"));k=k.navigationPosition;k=k==="bottom";var l=c("usePolarisNonPersonalizedTabsImpressionLogger")("exploreLandingPage");if(!g)return h.jsx(c("PolarisKeywordSearchExploreHeaderContent.react"),{keyword:b});g=h.jsxs(h.Fragment,{children:[h.jsxs(c("IGDSBox.react"),{alignItems:"center",containerRef:l,direction:"row",display:"flex",minHeight:50,children:[h.jsx(c("PolarisExplorePagePersonalizationPopoverHeaderItem.react"),{currentKeyword:b}),e.length===0&&a.length===0&&c("gkx")("4927")===!0?h.jsx(c("CometPlaceholder.react"),{fallback:h.jsx(c("PolarisKeywordExplorePillsPlaceholder.react"),{isNonPersonalizedExplore:f}),children:h.jsx(c("PolarisKeywordSearchExploreHeaderWithRetry.react"),{keyword:b})}):h.jsx(c("PolarisKeywordSearchExploreHeaderContent.react"),{keyword:b})]}),h.jsx(c("IGDSDivider.react"),{style:"elevated"})]});return k?g:h.jsxs(h.Fragment,{children:[h.jsx(c("PolarisScrollawayHeaderWrapper.react"),{xstyle:j.scrollawayHeaderWrapper,children:g}),h.jsx("div",{className:"x1d9vk0g"})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("getPolarisExploreGridItemsMetadata",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a.reduce(function(a,b){return b.layout_type==="media_grid"?g(a,b):h(a,b)},[]).filter(function(a){return a.shortcode!==""})}function g(a,b){var c;b=[(c=b.layout_content)==null?void 0:c.primary_item].concat((c=b.layout_content)==null?void 0:c.fill_items).map(function(a){var b,c;b=a==null?void 0:(b=a.image_versions2)==null?void 0:(b=b.candidates)==null?void 0:(b=b[0])==null?void 0:b.width;c=a==null?void 0:(c=a.image_versions2)==null?void 0:(c=c.candidates)==null?void 0:(c=c[0])==null?void 0:c.height;c=b!=null&&c!=null?{height:c,width:b}:null;return{dimensions:c,shortcode:(b=a==null?void 0:a.code)!=null?b:""}});return[].concat(a,b)}function h(a,b){var c,d,e,f;c=(c=(c=b.layout_content)==null?void 0:(c=c.fill_items)==null?void 0:c.map(function(a){var b,c;b=a==null?void 0:(b=a.image_versions2)==null?void 0:(b=b.candidates)==null?void 0:(b=b[0])==null?void 0:b.width;c=a==null?void 0:(c=a.image_versions2)==null?void 0:(c=c.candidates)==null?void 0:(c=c[0])==null?void 0:c.height;c=b!=null&&c!=null?{height:c,width:b}:null;return{dimensions:c,shortcode:(c=(b=a.media)==null?void 0:b.code)!=null?c:""}}))!=null?c:[];d=(d=b.layout_content)==null?void 0:d.primary_item;e=d==null?void 0:(e=d.image_versions2)==null?void 0:(e=e.candidates)==null?void 0:(e=e[0])==null?void 0:e.width;f=d==null?void 0:(f=d.image_versions2)==null?void 0:(f=f.candidates)==null?void 0:(f=f[0])==null?void 0:f.height;f=e!=null&&f!=null?{height:f,width:e}:null;f={dimensions:f,shortcode:(e=d==null?void 0:d.code)!=null?e:""};e=((d=b.layout_type)==null?void 0:d.endsWith("left"))===!0;return e?[].concat(a,[f],c):[].concat(a,c,[f])}f["default"]=a}),66);
__d("PolarisDynamicExplorePageSharedGrid.react",["CometPlaceholder.react","IGRouter","PolarisDynamicExploreGrid.react","PolarisDynamicExploreMediaHelpers","PolarisKeywordSearchExploreHeader.react","PolarisKeywordSearchRefinementPillSection.react","PolarisLogger","PolarisUA","deferredLoadComponent","getPolarisExploreGridItemURL","getPolarisExploreGridItemsMetadata","logPolarisPostModalOpen","polarisDynamicExploreSelectors","polarisUnexpected","qex","react","requireDeferred","useCometRouterDispatcher"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useEffect,j=b.useState,k=c("deferredLoadComponent")(c("requireDeferred")("PolarisDynamicExplorePostModal.react").__setRef("PolarisDynamicExplorePageSharedGrid.react")),l=1;function a(a){var b=a.clusters,e=a.exploreGridQuery,f=a.exploreGridType,g=a.hasMobileHeaderWithRefinements,m=a.logGridItemClick,n=a.logGridItemImpression,o=a.mediaLinkBuilder,p=a.modalEntryPath,q=a.onNextPage,r=a.pageID,s=a.pagination,t=a.requestInitialGrid,u=a.sectionalItems;a=j(!1);var v=a[0],w=a[1];a=j(null);var x=a[0],y=a[1],z=d("IGRouter").useIGHistory(),A=c("useCometRouterDispatcher")();a=function(a,b,e,f,g){var h=e.layout_content,i=e.layout_type;h=h.fill_items.find(function(a){return a.id===b.id});h=h?d("PolarisDynamicExploreMediaHelpers").GRID_ITEM_SIZE.ONE_BY_ONE:d("PolarisDynamicExploreMediaHelpers").getGridItemPlacement(i).size;m&&m(b,h,e,f,g);d("PolarisLogger").logAction("exploreGridItemClicked");if(d("PolarisUA").isDesktop()){a.preventDefault();if(A!=null&&c("qex")._("903")===!0){i=c("getPolarisExploreGridItemURL")(b.code);h=c("getPolarisExploreGridItemsMetadata")(u);A==null?void 0:A.go(i,{passthroughProps:{chainingItems:h}})}else B(d("PolarisDynamicExploreMediaHelpers").getPostId(b))}};function B(a){w(!0);y(a);var b=u.findIndex(function(b){return d("polarisDynamicExploreSelectors").getGridItemsFromSectionalItem(b).some(function(b){return b.pk===a})}),e=d("polarisDynamicExploreSelectors").getGridItemsFromSectionalItem(u[b]).find(function(b){return b.pk===a});e=(e=e==null?void 0:e.media_type)!=null?e:0;e===0&&c("polarisUnexpected")("DynamicExplorePageSharedContent: missing media type for post modal log event");c("logPolarisPostModalOpen")(r,e,"explore_page");e=u.length-b-1;(s==null?void 0:s.moreAvailable)===!0&&!s.isLoading&&e<l&&q()}var C=function(){w(!1),y(null)};i(function(){return z.listen(function(a){z.action==="POP"&&C()})},[z]);var D=!d("PolarisUA").isMobile()&&c("qex")._("889")===!0;return h.jsxs(h.Fragment,{children:[b!=null&&b.length>0&&!D&&h.jsx(c("PolarisKeywordSearchRefinementPillSection.react"),{keywordRefinements:b.map(function(a){return{displayText:a.name,keywordId:a.id,keywordName:a.name,position:a.ranked_position}})}),D&&h.jsx(c("CometPlaceholder.react"),{fallback:null,children:h.jsx(c("PolarisKeywordSearchExploreHeader.react"),{keyword:(b=e)!=null?b:""})}),h.jsx(c("PolarisDynamicExploreGrid.react"),{analyticsContext:r,exploreGridQuery:e,exploreGridType:f,hasNextPage:(D=s==null?void 0:s.moreAvailable)!=null?D:!1,hasTopRefinementsSection:g,isFetching:(b=s==null?void 0:s.isLoading)!=null?b:!1,logGridItemImpression:n,mediaLinkBuilder:o,onGridItemClick:a,onNextPage:q,onRetry:t,sectionalItems:u}),v&&x!=null&&h.jsx(k,{analyticsContext:r,exploreGridQuery:e,exploreGridType:f,modalEntryPath:p,onClose:C,onOpen:B,postId:x})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisDynamicExploreMediaPageGrid.react",["PolarisDynamicExploreActions","PolarisDynamicExploreMediaHelpers","PolarisDynamicExplorePageSharedGrid.react","PolarisDynamicExploreTypes","PolarisExploreLogger","PolarisLinkBuilder","PolarisLogger","PolarisOrganicThumbnailImpression","PolarisReactRedux","PolarisRoutes","PolarisUA","emptyFunction","polarisDynamicExploreSelectors","react","usePolarisGetQuerySetup"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function i(a){return d("PolarisUA").isMobile()?d("PolarisLinkBuilder").buildChainingMediaLink(d("PolarisDynamicExploreMediaHelpers").getPostCode(a)):d("PolarisLinkBuilder").buildMediaLink(d("PolarisDynamicExploreMediaHelpers").getPostCode(a))}function a(a){var b=a.exploreGridType,e=a.exploreQuery,f=a.pageID,g=d("PolarisReactRedux").useDispatch(),j=d("PolarisReactRedux").useSelector(function(a){return a.dynamicExplore.isNonPersonalizedExplore});c("usePolarisGetQuerySetup")(e,d("PolarisDynamicExploreActions").setupDynamicExploreGrid({isNonPersonalizedExplore:j}));var k=d("PolarisReactRedux").useSelector(function(a){return a.dynamicExplore.pagination});function l(){d("PolarisLogger").logAction("discoverNextLoadAttempt"),g(d("PolarisDynamicExploreActions").requestDynamicExploreGrid({cursor:j?k.nonpersonalized.cursor:k.personalized.cursor,isNonPersonalizedExplore:j,retryHandler:l}))}a=d("PolarisReactRedux").useSelector(function(a){return d("polarisDynamicExploreSelectors").getSupportedSectionalItems(a,d("PolarisDynamicExploreTypes").DYNAMIC_EXPLORE_GRID_TYPES.home_explore_grid)});e=d("PolarisReactRedux").useSelector(function(a){return d("polarisDynamicExploreSelectors").getClusters(a)});var m=function(a,b,c,e,f){d("PolarisExploreLogger").logExploreHomeClick({column:f,gridItemSize:b,mediaType:d("PolarisDynamicExploreMediaHelpers").getMediaType(a),postId:d("PolarisDynamicExploreMediaHelpers").getPostId(a),row:e,type:d("PolarisExploreLogger").getDynamicExploreGridItemType(a)})},n=function(a,b){return d("PolarisOrganicThumbnailImpression").makeThumbnailImpressionAction({analyticsContext:f,column:a.column,gridItemSize:b,itemType:a.item_type,mediaType:(b=a.media_type)!=null?b:void 0,postId:d("PolarisDynamicExploreMediaHelpers").getPostId(a),row:a.row})};return h.jsx(c("PolarisDynamicExplorePageSharedGrid.react"),{clusters:e,exploreGridType:b,hasMobileHeaderWithRefinements:d("PolarisUA").isMobile()&&e!=null&&e.length>0,logGridItemClick:m,logGridItemImpression:n,mediaLinkBuilder:i,modalEntryPath:d("PolarisRoutes").DISCOVER_MEDIA_PATH,onNextPage:l,pageID:f,pagination:j?k.nonpersonalized:k.personalized,requestInitialGrid:c("emptyFunction"),sectionalItems:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisErrorBoundaryWithRetry.react",["ErrorBoundary.react","react","useCounter"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useCallback;function a(a){var b=a.fallback,d=a.onError;a=babelHelpers.objectWithoutPropertiesLoose(a,["fallback","onError"]);var e=c("useCounter")(),f=e[0],g=e[1].increment;e=i(function(a){d(a,g)},[d,g]);var j=i(function(a){return b(a,g)},[b,g]);return h.jsx(c("ErrorBoundary.react"),babelHelpers["extends"]({fallback:j,forceResetErrorCount:f,onError:e},a))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisDynamicExploreMediaPageGridWithRetry.react",["CometPlaceholder.react","PolarisDynamicExploreActions","PolarisDynamicExploreLoadingSpinner.react","PolarisDynamicExploreMediaPageGrid.react","PolarisDynamicExploreTypes","PolarisErrorBoundaryWithRetry.react","PolarisErrorRetrySection.react","PolarisReactRedux","react","usePolarisGetQueryRefetcher"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useCallback;function a(a){var b=a.exploreQuery;a=a.pageID;var e=d("PolarisReactRedux").useDispatch(),f=c("usePolarisGetQueryRefetcher")(b),g=i(function(a){return function(){f(),a()}},[f]),j=i(function(a,b){e(d("PolarisDynamicExploreActions").logErrorAndShowRetryToast(a,g(b)))},[e,g]),k=i(function(a,b){return h.jsx(c("PolarisErrorRetrySection.react"),{onRetry:g(b)})},[g]);return h.jsx(c("CometPlaceholder.react"),{fallback:h.jsx(c("PolarisDynamicExploreLoadingSpinner.react"),{}),children:h.jsx(c("PolarisErrorBoundaryWithRetry.react"),{fallback:k,onError:j,children:h.jsx(c("PolarisDynamicExploreMediaPageGrid.react"),{exploreGridType:d("PolarisDynamicExploreTypes").DYNAMIC_EXPLORE_GRID_TYPES.home_explore_grid,exploreQuery:b,pageID:a})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisDynamicExplorePageContentWrapper.react",["PolarisErrorBoundary.react","PolarisNavigationLayoutContext","PolarisSearchResultDisplayTypes","PolarisUA","cr:4474","cr:6698","react","stylex","usePolarisIsOnExplorePage"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useContext,j={root:{display:"x78zum5",flexDirection:"xdt5ytf",flexGrow:"x1iyjqo2",marginTop:"xdj266r",marginEnd:"xkrivgy",marginBottom:"x4n8cb0",marginStart:"x1gryazu",maxWidth:"x1fawyso",width:"xh8yej3","@media (max-width: 735px)_backgroundColor":"x19b80pe","@media (max-width: 735px)_marginBottom":"xhae0no","@media (min-width: 736px)_boxSizing":"xmjrnx3","@media (min-width: 736px)_paddingTop":"x103t36t","@media (min-width: 736px)_paddingEnd":"x16mfq2j","@media (min-width: 736px)_paddingBottom":"x1e49onv","@media (min-width: 736px)_paddingStart":"x7flfwp","@media (min-width: 736px)_width":"x1ugxg0y",$$css:!0},rootDesktop:{"@media (max-width: 735px)_paddingTop":"x1oqrbt2","@media (min-width: 736px)_paddingTop":"xgzdhx4",$$css:!0}};function a(a){var e=a.children;a=a.pageId;var f=i(c("PolarisNavigationLayoutContext"));f=f.navigationPosition;f=c("usePolarisIsOnExplorePage")()&&d("PolarisUA").isDesktop()&&f==="bottom";return h.jsxs("div",{className:c("stylex")(j.root,d("PolarisUA").isDesktop()&&j.rootDesktop),"data-testid":void 0,children:[f&&b("cr:4474")!=null&&h.jsx(b("cr:4474"),{analyticsContext:a,searchBoxOnExplore:!0,useHistory:!1}),f&&b("cr:6698")!=null&&h.jsx(c("PolarisErrorBoundary.react"),{children:h.jsx(b("cr:6698"),{analyticsContext:a,resultDisplayType:c("PolarisSearchResultDisplayTypes").Popover})}),e]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisExploreMobileHeader.react",["IGDSBox.react","PolarisGenericMobileHeader.react","PolarisSearchBoxContainer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.analyticsContext;a=a.isSearchOpen;return h.jsx(c("PolarisGenericMobileHeader.react"),{className:"xnz67gz",title:h.jsx(c("IGDSBox.react"),{alignItems:"center",direction:"row",position:"relative",children:h.jsx(c("IGDSBox.react"),{flex:"grow",position:"relative",children:h.jsx(c("PolarisSearchBoxContainer.react"),{analyticsContext:b,isActive:a,useHistory:!0})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisExploreRootContent.react",["CometPlaceholder.react","PolarisDynamicExploreLoadingSpinner.react","PolarisDynamicExploreMediaPageGridWithRetry.react","PolarisDynamicExplorePageContentWrapper.react","PolarisMonitorErrors","PolarisQPManager.react","PolarisReactRedux","PolarisRoutes","PolarisSearchResultsListContainer.react","PolarisUA","react","useCometRouterDispatcher","usePolarisPreloadedGetQuery"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useEffect,j="exploreLandingPage";function a(a){a=a.routeProps;var b=a.is_search_open,e=a.nonpersonalized;a=a.polaris_preload;var f=c("useCometRouterDispatcher")(),g=d("PolarisReactRedux").useDispatch();g({isNonPersonalizedExplore:e,type:"NON_PERSONALIZED_EXPLORE"});g=c("usePolarisPreloadedGetQuery")(a.explore);i(function(){if(d("PolarisUA").isMobile())try{f==null?void 0:f.prefetchRouteDefinition(d("PolarisRoutes").DISCOVER_SEARCH_PATH)}catch(a){d("PolarisMonitorErrors").logError(a)}},[f]);e=b===!0&&d("PolarisUA").isMobile();return h.jsxs(c("PolarisDynamicExplorePageContentWrapper.react"),{pageId:j,children:[h.jsx(c("PolarisQPManager.react"),{slot:"explore"}),e?h.jsx(c("PolarisSearchResultsListContainer.react"),{analyticsContext:j,isVisibleInPopup:!1}):h.jsx(c("CometPlaceholder.react"),{fallback:h.jsx(c("PolarisDynamicExploreLoadingSpinner.react"),{}),children:h.jsx(c("PolarisDynamicExploreMediaPageGridWithRetry.react"),{exploreQuery:g,pageID:j})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisExploreRoot.react",["PolarisExploreMobileHeader.react","PolarisExploreRootContent.react","PolarisFooterVariants","PolarisPageMetadata.react","PolarisShell.react","PolarisSizing","PolarisUA","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i="exploreLandingPage";function a(a){a=a.props.routeProps;var b=a.is_search_open;return h.jsxs(c("PolarisShell.react"),{footerVariant:d("PolarisUA").isMobile()?c("PolarisFooterVariants").slim:c("PolarisFooterVariants").centered,maxWidth:d("PolarisUA").isMobile()?d("PolarisSizing").SITE_WIDTHS.narrow:d("PolarisSizing").SITE_WIDTHS.wide,mobileHeader:h.jsx(c("PolarisExploreMobileHeader.react"),{analyticsContext:i,isSearchOpen:b===!0}),pageIdentifier:i,renderPageLayoutHandler:!0,children:[h.jsx(c("PolarisPageMetadata.react"),{id:i}),h.jsx(c("PolarisExploreRootContent.react"),{routeProps:a})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);