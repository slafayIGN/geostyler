## [13.1.1](https://github.com/geostyler/geostyler/compare/v13.1.0...v13.1.1) (2023-08-14)


### Bug Fixes

* **deps:** update dependency typescript-json-schema to ^0.59.0 ([f899617](https://github.com/geostyler/geostyler/commit/f89961727f0b2d069adaba9f61d357b63d12035d))
* move thrown error to SLDRenderer ([699a86e](https://github.com/geostyler/geostyler/commit/699a86e697b058251d08b21abb7af55376004708))

## [13.1.0](https://github.com/geostyler/geostyler/compare/v13.0.1...v13.1.0) (2023-07-13)


### Features

* add `onActiveParserChange` to `CodeEditor` ([#2314](https://github.com/geostyler/geostyler/issues/2314)) ([cc646cd](https://github.com/geostyler/geostyler/commit/cc646cda463c4c0509d728b011ad889b544fd2fb))
* add FunctionUI to ColorField ([c7a838b](https://github.com/geostyler/geostyler/commit/c7a838ba995dba69d4df260cebd40c31755fcd80))


### Bug Fixes

* **deps:** update dependency geostyler-openlayers-parser to v4.2.1 ([d597f49](https://github.com/geostyler/geostyler/commit/d597f4941687f5c7d2f491fec01f51b2747f9a66))
* **deps:** update dependency monaco-editor to ^0.40.0 ([ffe268d](https://github.com/geostyler/geostyler/commit/ffe268dd54cf83800393f5717e263900e48387bf))
* **deps:** update dependency typescript-json-schema to ^0.58.0 ([2960294](https://github.com/geostyler/geostyler/commit/2960294e4d5fe9262898ce6942d142278c5b403b))
* readd OpenLayers as default rendererType ([46c3d5c](https://github.com/geostyler/geostyler/commit/46c3d5c5eb0631297a24bd2cb50ebfd93be90f07))
* set ColorPicker to full width ([e601c23](https://github.com/geostyler/geostyler/commit/e601c236248aa6484caca718812ea5f06b48c978))

## [13.0.1](https://github.com/geostyler/geostyler/compare/v13.0.0...v13.0.1) (2023-06-23)


### Bug Fixes

* add missing GeoStylerContextInterface export ([0f8214e](https://github.com/geostyler/geostyler/commit/0f8214ed186c950dcbc8618d0547423ffabdd822))

## [13.0.0](https://github.com/geostyler/geostyler/compare/v12.0.0...v13.0.0) (2023-06-22)


### ⚠ BREAKING CHANGES

* removes the 'data' / 'internalDataDef' prop from several
components and removes the Preview component
* - removed all default exports from react components
- removed many exported *DefaultProps types
* modifies API of GeoStylerContext.unsupportedProperties
* removes legacy UnsupportedPropertiesContext
* - removes legacy CompositionContext and CompositionUtil
- removes the withDefaultsContext and use GeoStylerContext instead
- removes properties from Style and RuleTable and use GeoStylerContext instead
- removes legacy DefaultValueContext
- removes iconEditorProps and iconLibraries from Editor and CardStyle
- removes iconLibraries and imageFieldProps from IconEditor
- remove several props from Style and RuleGeneratorWindow and use GeoStylerContext instead
- removes filterUIProps from FilterEditorWindow and FilterTree
- enableClassification property in Rules is replaced with disableClassification
* The 'react-color' colorpicker was replaced with 'ColorPicker' of 'antd'.
All react-color specific props were removed and replaced with the props of antd's colorpicker.
Also, the prop 'color' was renamed to 'value'.
* removes the DataProvider

Co-authored-by: Kai Volland <volland@terrestris.de>
* changed value property of LineCapField and LineJoinField from `cap` / `join` to `value`
* This removes the deprecated CompositionContext in favor
of the new GeoStylerContext composition from Editor. This also removes
the property `colorRamps` from Editor without replacement. This will be
re-added soon.
* This removes the properties `showAmount` and
`showDuplicates` from RuleCard. Please use
GeoStylerContext.composition.Rule.amount and
GeoStylerContext.composition.Rule.duplicate instead.
* This removes the properties `showAmountColumn` and
`showDuplicatesColumn` from <RuleTable> and thereby also from <Style>. Please
use GeoStylerContext.composition.Rule.amount.visibility and
GeoStylerContext.composition.Rule.duplicate.visibility instead.
* OpacityField, WidthField and SizeField now expect the corresponding value to passed as value 
 instead of opacity, width, size as this conflicted with some properties of the Inputs
* the javascript file of the browser build is now called geostyler.js.iife.js
* This removes the `defaultValues` property from
RasterEditor. Please use GeoStylerContext.composition instead.
* This removes the support for the deprecated
CompositionContext in favor of the new GeoStylerContext for the
RasterEditor. Please use GeoStylerContext.composition now.
* Peer dependencies of antd and @ant-design/icons do require versions 5.x
* This removes the support for the deprecated
CompositionContext in favor of the new GeoStylerContext for the
TextEditor. This also removes the `defaultValues` property for the
TextEditor. Please use GeoStylerContext.composition instead.
* This removes the support for the deprecated
CompositionContext in favor of the new GeoStylerContext for the
WellKnownNameEditor. This also removes the `defaultValues` property
for the WellKnownNameEditor. Please use GeoStylerContext.composition
instead.
* This removes the support for the deprecated
CompositionContext in favor of the new GeoStylerContext for the
MarkEditor. This also removes the `defaultValues` property from
MarkEditor.
* This removes the support of the deprecated
CompositionContext in favor of the new GeoStylerContext for the
LineEditor. This also removes the `defaultValue` property from
LineEditor. Please use GeoStylerContext.composition instead. For now,
composition of graphicFill and graphicStroke was changed without
replacement. Support will be re-added again in the future.
* This removes the support of the deprecated
CompositionContext in favor of the new GeoStylerContext for the
IconEditor. This also removes the `defaultValues` property from
IconEditor. Please use GeoStylerContext.composition instead.
* This removes the support of the deprecated CompositionContext
in favor of the new GeoStylerContext for the FillEditor. This also
removes the `defaultValues` property from FillEditor. Please use
GeoStylerContext.composition instead.

### Features

* add 'data' prop to GeoStylerContext ([760f557](https://github.com/geostyler/geostyler/commit/760f5573288793526425647b7e102a279ec7ee54))
* add Croatian translations ([06c5ee2](https://github.com/geostyler/geostyler/commit/06c5ee27864d58ada074b1bb612b1896069d0564))
* add SLDRenderer to CompositionContext ([1766f40](https://github.com/geostyler/geostyler/commit/1766f4059dd59c50f164a4e41affe8263c9e2a2a))
* add support for all EPSG codes to PreviewMap ([6df76dd](https://github.com/geostyler/geostyler/commit/6df76ddee63d85e5175c5f8084cec0e823cf364f))
* introduce FunctionUI and ExpressionInputs ([697b73a](https://github.com/geostyler/geostyler/commit/697b73a2cb28e8bdd497dfaea4e88aad02890f6c))
* introduces StringExpressionSelect ([32fbbc7](https://github.com/geostyler/geostyler/commit/32fbbc7ca1ccd9cf1ae2ac36f8f952471ffaf26b))
* make use of useGeoStylerLocale ([2f05973](https://github.com/geostyler/geostyler/commit/2f0597350c0872764312d2f15b9b00afcd9c86e7))
* remove DataProvider ([#2210](https://github.com/geostyler/geostyler/issues/2210)) ([15ca661](https://github.com/geostyler/geostyler/commit/15ca661747b33b5ed2fb10d2e4964eac8c3083b9))
* remove deprecated Rule and compact property ([e683b3f](https://github.com/geostyler/geostyler/commit/e683b3fdd7b7f2d7637caa92e38ce25647680f66))
* removes legacy UnsupportedPropertiesContext ([736f91c](https://github.com/geostyler/geostyler/commit/736f91c0a262c6b5cdbad9c2d3238f1d9162a4e1))
* replace react-rnd window like components with antd modals ([9333f4b](https://github.com/geostyler/geostyler/commit/9333f4b2c7657181471cda2831646a195ff35741))
* replace remove symbolizer button with removable tabs ([#2152](https://github.com/geostyler/geostyler/issues/2152)) ([34ad73d](https://github.com/geostyler/geostyler/commit/34ad73d67a2607e6d767070fb48e7b28ab1acc4d))
* update geostyler dependencies ([a4ca370](https://github.com/geostyler/geostyler/commit/a4ca37006124fadbbd15045271937a9d84076574))
* update GeoStylerContext ([4b7ba05](https://github.com/geostyler/geostyler/commit/4b7ba058e0538346cc8b0f0692f233974908f685))
* Use ExpressionInputs in Symbolizer Fields ([#2136](https://github.com/geostyler/geostyler/issues/2136)) ([94f13e6](https://github.com/geostyler/geostyler/commit/94f13e6e1ef35c7d31040a016c6ba7cbaf466ac9))
* use GeoStylerContext composition for ColorMapEditor ([#2135](https://github.com/geostyler/geostyler/issues/2135)) ([86d7db2](https://github.com/geostyler/geostyler/commit/86d7db27da6f2e16c8324061dc20b43219b319a0))
* use GeoStylerContext composition for ComparisonFilter ([#2141](https://github.com/geostyler/geostyler/issues/2141)) ([4e22016](https://github.com/geostyler/geostyler/commit/4e2201669b4fc05de89b9435556f783b0cb18562))
* use GeoStylerContext composition for Editor ([#2148](https://github.com/geostyler/geostyler/issues/2148)) ([fb84746](https://github.com/geostyler/geostyler/commit/fb847465bc26813f66cf2ed1bafda60246011a16))
* use GeoStylerContext composition for MarkEditor ([#2125](https://github.com/geostyler/geostyler/issues/2125)) ([d1bbfd0](https://github.com/geostyler/geostyler/commit/d1bbfd08cae87f35498e029949f82b728f773b16))
* use GeoStylerContext composition for RasterChannelEditor ([#2134](https://github.com/geostyler/geostyler/issues/2134)) ([e02312e](https://github.com/geostyler/geostyler/commit/e02312ec9ca934640a10acbcf936041644450a1b))
* use GeoStylerContext composition for RasterEditor ([#2131](https://github.com/geostyler/geostyler/issues/2131)) ([5039e1d](https://github.com/geostyler/geostyler/commit/5039e1d49025b217ad21168085b0ef0ca4f86af9))
* use GeoStylerContext composition for RuleCard and RuleOverview ([#2145](https://github.com/geostyler/geostyler/issues/2145)) ([346ffad](https://github.com/geostyler/geostyler/commit/346ffadb3721b767f9a94332a176acc032d92735))
* use GeoStylerContext composition for Rules and RuleTable ([#2142](https://github.com/geostyler/geostyler/issues/2142)) ([ad98b61](https://github.com/geostyler/geostyler/commit/ad98b610a3d1672852efc51518992d66462d343a))
* use GeoStylerContext composition for TextEditor ([#2130](https://github.com/geostyler/geostyler/issues/2130)) ([1a2e01c](https://github.com/geostyler/geostyler/commit/1a2e01c201a24f45752db4557a897c45d6a30b37))
* use GeoStylerContext composition for WellKnownNameEditor ([#2129](https://github.com/geostyler/geostyler/issues/2129)) ([60e84bb](https://github.com/geostyler/geostyler/commit/60e84bba209ff0dceddbe7bc5c62a5839171f4f4))
* use GeoStylerContext composition on FillEditor ([#2119](https://github.com/geostyler/geostyler/issues/2119)) ([b0e0949](https://github.com/geostyler/geostyler/commit/b0e09498300d1402ef879757eead66880de1fbe9))
* use GeoStylerContext composition on IconEditor ([#2121](https://github.com/geostyler/geostyler/issues/2121)) ([8549a2c](https://github.com/geostyler/geostyler/commit/8549a2ce6c7ea18eee5117ce75dbd1af56cffd39))
* use GeoStylerContext composition on LineEditor ([#2123](https://github.com/geostyler/geostyler/issues/2123)) ([b05f3db](https://github.com/geostyler/geostyler/commit/b05f3dbd480cf7bbb823be4de0fb0f5b2e1d48be))
* visibility field ([#2155](https://github.com/geostyler/geostyler/issues/2155)) ([7b9c05d](https://github.com/geostyler/geostyler/commit/7b9c05dade879a7e55e9bb1ea1094e7095ce069a))


### Bug Fixes

* add missing typings ([c2ec232](https://github.com/geostyler/geostyler/commit/c2ec232cc76905b9a1d797db65f4bdcf8a9a38be))
* add missing whitespace ([938e082](https://github.com/geostyler/geostyler/commit/938e082bad4f5387af6c1fc1640c57358f64a612))
* add the symbolizer kind to the tab label ([dfda25d](https://github.com/geostyler/geostyler/commit/dfda25db81831f059e24507944deeaaa4c0deb02))
* add typing ([da047eb](https://github.com/geostyler/geostyler/commit/da047ebd1faec44ed2013678c135070b28b4d6d3))
* **antd-update:** include reset css ([a63a464](https://github.com/geostyler/geostyler/commit/a63a464ae2d565e3b191d5f91355456f0caa27e0))
* **antd-update:** migrate to antd v5 ([451ab9b](https://github.com/geostyler/geostyler/commit/451ab9ba2737ec2f48e31fe55eed9fbca8c14479))
* change 3 strings in french ([6e0aeae](https://github.com/geostyler/geostyler/commit/6e0aeae817707169872ba09464654643544f39e0))
* clone symbolizers before parsing ([46ed80d](https://github.com/geostyler/geostyler/commit/46ed80dd03ec7256c675c4fbb638f09237627565))
* **CodeEditor:** model only for geostyler-style ([1f89c9a](https://github.com/geostyler/geostyler/commit/1f89c9a69cec44a81bc09a0360e4e752b5efbc43))
* correct the renovate JSON ([ee71abd](https://github.com/geostyler/geostyler/commit/ee71abda5f9c5cbc46ad2ea79e02c425994e7b16))
* **deps:** update dependency @types/lodash to v4.14.195 ([594331c](https://github.com/geostyler/geostyler/commit/594331c60f5c7d377e5d983791149e90a2dd0611))
* **deps:** update dependency monaco-editor to ^0.39.0 ([30be095](https://github.com/geostyler/geostyler/commit/30be09571b473047de34929b5f04edf01101e479))
* **deps:** update dependency typescript-json-schema to ^0.57.0 ([eadfab7](https://github.com/geostyler/geostyler/commit/eadfab7592452b62ec8a5b7dcf73fd3176f787af))
* fix RuleTable example ([a3f0053](https://github.com/geostyler/geostyler/commit/a3f005314568dac4302dd7c7aeef52eab553c7f5))
* improve test performance ([#2143](https://github.com/geostyler/geostyler/issues/2143)) ([4dd5a8c](https://github.com/geostyler/geostyler/commit/4dd5a8c3facce4d4d858e52ca8cd706fc3a201d7))
* remove unused import ([81a7257](https://github.com/geostyler/geostyler/commit/81a7257147d3b7b046583922e9d3ebb5532c4997))
* resolve some ts any warnings ([8b99cc5](https://github.com/geostyler/geostyler/commit/8b99cc51885713f6fa29721628bae763c7e306fa))
* set role ([4f72ecd](https://github.com/geostyler/geostyler/commit/4f72ecddf44559654d104ee1341a92e2e6667d89))
* update CodeEditor to allow JSON objects ([df05b06](https://github.com/geostyler/geostyler/commit/df05b06add7111094c7d26543091d72fedec580e))
* update error messages ([585eaec](https://github.com/geostyler/geostyler/commit/585eaec33a1aa4222c338ba13142d9bcf8aa4f87))
* update outline opacity label for en_US ([c3dc256](https://github.com/geostyler/geostyler/commit/c3dc256c71e77829eedb9ddd1a3654cad7287da4))
* update RuleCard example ([3e09ece](https://github.com/geostyler/geostyler/commit/3e09ece992366d18f1d67c36feeb2ab436621071))


### Miscellaneous Chores

* update peer dependencies of antd ([9b94844](https://github.com/geostyler/geostyler/commit/9b948442a0c9d5c475629cb2f058212217b9708c))


* Use antd ColorPicker for `ColorField` (#2213) ([9ed225d](https://github.com/geostyler/geostyler/commit/9ed225d907b042eb2dec2eb2ff6f5b92955449c2)), closes [#2213](https://github.com/geostyler/geostyler/issues/2213)


### Code Refactoring

* update and refactor usage of GeoStylerContext ([82cb955](https://github.com/geostyler/geostyler/commit/82cb9555e38689fedcde9d3513628e7b00c7cd3b))
* use vite for dev & browser build ([#2133](https://github.com/geostyler/geostyler/issues/2133)) ([e8d9dac](https://github.com/geostyler/geostyler/commit/e8d9dace0f9d14c2140a16438ffcb5047daa7ca6))

## [12.0.0](https://github.com/geostyler/geostyler/compare/v11.1.1...v12.0.0) (2023-03-13)


### ⚠ BREAKING CHANGES

* This updates the props of the Renderer component.
Now, props depend on the provided renderer type. For SLD, only the
props for the SLDRenderer will be applicable, for OpenLayers, only
the props for the oLRenderer will be applicable.
* Multiple props of components that are related
to <CardStyle> have been updated. Mainly, existing properties
were removed in order to prepare for the usage of GeoStylerContext.
* The property unknownSymbolizerText of <Editor> was
moved to the locale property in order to provide translations.
* Removes props filterUiProps, iconLibraries, colorRamps from Rules.
Moves showAmount, showDuplicates to RuleCard and to ruleCardProps
on Rules.
* Moved src/Component/Symbolizer/Renderer/Renderer to
src/ComponentRenderer/OlRenderer. Moved
src/Component/Symbolizer/SLDRenderer to
src/Component/Renderer/SLDRenderer. Moved src/Renderer/Renderer to
src/Renderer/Renderer. Added OlRenderer specific props to Renderer.
* Removed prop was replaced with props colorRamps, useBrewerColorRamps and
colorSpaces in order to harmonize CardStyle with Style.
* The label prop was removed from MaxScaleDenominator and MinScaleDenominator. The labels are now part of i18n and can be configured via the locale property.

### Features

* prepare GeoStylerContext ([e5529a3](https://github.com/geostyler/geostyler/commit/e5529a31ed2f34d842c4a2e3bd3c026a17395330))
* update CompositionContext type ([5edda76](https://github.com/geostyler/geostyler/commit/5edda76d7086ca81b3467c710c891ea3c6f81cb5))
* use vertical form layout ([9cc8e08](https://github.com/geostyler/geostyler/commit/9cc8e08240b151e22aea5bb89e7ac79192707a2e))


### Bug Fixes

* add missing GeoStylerContext to index.ts ([5f74578](https://github.com/geostyler/geostyler/commit/5f7457892a0f2c3a2daa7a402c9f1c76b8da5909))
* adds dynamic translation ([2ba62a7](https://github.com/geostyler/geostyler/commit/2ba62a73db43510c8daa5c46c8cefd6835d15d64))
* adjust paddings and margins on form items ([88c7a78](https://github.com/geostyler/geostyler/commit/88c7a78ef782447ac674170fae0ab5f740c1a493))
* fixing imports ([108a72a](https://github.com/geostyler/geostyler/commit/108a72a3ff48cdf9b47998d27ba7df50b04ee549))
* make all CompositionContext props optional ([5d8c8b5](https://github.com/geostyler/geostyler/commit/5d8c8b5982632af5c22e0aa4bf6cef97d6f134e1))
* remove Omit on oLRendererProps typing ([96f867a](https://github.com/geostyler/geostyler/commit/96f867a3d8988686e9be2f018afb17e433cc2e99))
* remove unneded lines ([f8402c0](https://github.com/geostyler/geostyler/commit/f8402c030546071e0355fe30beeb0c79eaf5b493))
* set missing property in CardStyle ([76f6d90](https://github.com/geostyler/geostyler/commit/76f6d9091ab9c8b8871878def047af8ce793e559))


### breaking

* change props of Renderer component ([748a67c](https://github.com/geostyler/geostyler/commit/748a67c1130b48c06346dc807ba597f42bc3978b))
* move Editor property unknownSymbolizerText to locale ([8148ca7](https://github.com/geostyler/geostyler/commit/8148ca707e3433f46e18256aa5ccc244faa011a2))
* refactor renderer components ([ce87e0f](https://github.com/geostyler/geostyler/commit/ce87e0fae182d934c77e42789cfa3a70677ad042))
* remove label as a prop from MaxScaleDenominator and MinScaleDenominator ([ed3c2af](https://github.com/geostyler/geostyler/commit/ed3c2af227b5c2af55a039bca452216f74bc5e2f))
* remove ruleGeneratorProps from CardStyle ([c527753](https://github.com/geostyler/geostyler/commit/c527753ac2d146acf2e76b876e63cdc59cbdc18f))
* remove unnecessary props from Rules ([f037cf7](https://github.com/geostyler/geostyler/commit/f037cf7463bf9eb9a436be84e4449074e2e75c86))
* update props of CardStyle related components ([66b1ed1](https://github.com/geostyler/geostyler/commit/66b1ed16bb8f303ce61ca39d43406301150b557b))

## [11.1.1](https://github.com/geostyler/geostyler/compare/v11.1.0...v11.1.1) (2023-01-16)


### Bugfixes

* apply suggestions from code review ([b8486e8](https://github.com/geostyler/geostyler/commit/b8486e818f3e28905909c30cfbd2a3e6844af275))
* make RuleGeneratorUtil less prone to errors ([d55fd15](https://github.com/geostyler/geostyler/commit/d55fd157f6ba5d4412bac16e17affeb9bb4abac6))

## [11.1.0](https://github.com/geostyler/geostyler/compare/v11.0.0...v11.1.0) (2023-01-11)


### Features

* add offset fields to IconEditor ([ab6af25](https://github.com/geostyler/geostyler/commit/ab6af25b44f0e50d2d4c410ebfe08fe04aee298b))
* add offset fields to WellKnownNameEditor ([590d1e0](https://github.com/geostyler/geostyler/commit/590d1e09f0d1286e072c71a60b9c59a04c51bf99))
* add perpendicular offset field to LineEditor ([adadc54](https://github.com/geostyler/geostyler/commit/adadc541c65a2e151d91aa9e9933fa2f6673c4f5))
* expand FilterTree by default ([0e88d75](https://github.com/geostyler/geostyler/commit/0e88d75df8151196cd0e452fbc8df277c23b6f44))


### Bugfixes

* adapt path and defaultValue for editors ([cb74226](https://github.com/geostyler/geostyler/commit/cb74226d95310f44f55918e06a6a9491523a6280))
* remove internal state handling for CardStyle ([58635a1](https://github.com/geostyler/geostyler/commit/58635a148dc235b0b6da5af6c4b7042856a43b17))

## [11.0.0](https://github.com/geostyler/geostyler/compare/v10.3.1...v11.0.0) (2022-12-13)


### ⚠ BREAKING CHANGES

* This forces a major release for a previously wrongly
formatted commit message (commit sha 30e19de16a6310dcd79bf4e4292b33bf80004c0d)
that lead to the unintended release of version 10.3.1, which includes a
breaking change. The code of this release will be identical with the code of
version 10.3.1.

### Breaking changes

* force major release ([ecfb2a0](https://github.com/geostyler/geostyler/commit/ecfb2a0cdb61f3cf5767a12ab73c8da79efd88a5))

## [10.3.1](https://github.com/geostyler/geostyler/compare/v10.3.0...v10.3.1) (2022-12-13)


### ⚠ BREAKING CHANGES

* The components DragDroppable, DropIndicator, Removable as well as
DndUtil and the useDragDrop hook were removed. Component RemovableItem
was moved from src/Components/Removable/RemovableItem/RemovableItem.tsx
one level up to src/Components/RemovableItem/RemovableItem.tsx. The
newly introduced ref forwarding for SymbolizerCard and RuleCard were
removed.

* replace react-dnd with dnd-kit ([30e19de](https://github.com/geostyler/geostyler/commit/30e19de16a6310dcd79bf4e4292b33bf80004c0d))

## [10.3.0](https://github.com/geostyler/geostyler/compare/v10.2.0...v10.3.0) (2022-12-07)


### Features

* add Drag and Drop for rules and symbolizers to CardStyle ([33dbbbb](https://github.com/geostyler/geostyler/commit/33dbbbbef4854f90c1f9f8e2670a032c1f431407))


### Bugfixes

* translating 3 todos in fr ([#1997](https://github.com/geostyler/geostyler/issues/1997)) ([5e490f3](https://github.com/geostyler/geostyler/commit/5e490f380c15c741e4673098c42d157a86ce9edc))

## [10.2.0](https://github.com/geostyler/geostyler/compare/v10.1.0...v10.2.0) (2022-11-24)


### Features

* add uploadButtonProps to DataLoader ([7c4976c](https://github.com/geostyler/geostyler/commit/7c4976c5a7cdcc7afcdd579d9b6a54dbc3a919d6))
* adds srsName field to the WfsParserInput ([0c2a1c1](https://github.com/geostyler/geostyler/commit/0c2a1c1b9cc58d239a08f0ec86aeca957f23a61a))


### Bugfixes

* add check for empty extent to PreviewMap ([e8a881c](https://github.com/geostyler/geostyler/commit/e8a881c4b383a1fad7fee9440473659921b5ee64))
* add ColorRampCombo to index exports ([9e0b985](https://github.com/geostyler/geostyler/commit/9e0b9853384a1eb7b4b650bb4f1e5fbb8c98498f))
* fix onValueChange for between comparions ([f38330b](https://github.com/geostyler/geostyler/commit/f38330b2c9c40bbcf6357575d26380a94571a6c2))
* fix style of ColorRampCombo ([d36790a](https://github.com/geostyler/geostyler/commit/d36790af0cc765ad158dcf0cd416254fd551f00b))
* use UploadButtonProps ([4fbd55f](https://github.com/geostyler/geostyler/commit/4fbd55fc190eb0763078e96ea03cdf99bbcb0852))

## [10.1.0](https://github.com/geostyler/geostyler/compare/v10.0.0...v10.1.0) (2022-11-17)


### Features

* add clear button to color field ([#1945](https://github.com/geostyler/geostyler/issues/1945)) ([1dcd404](https://github.com/geostyler/geostyler/commit/1dcd4041f64ce4990fc7336ea9b4590705d27a06))


### Dependencies

* update version to 10.0.0 ([791a7a7](https://github.com/geostyler/geostyler/commit/791a7a7d813641badd733e561ec6ca0d24fab681))


### Changes in configuration

* update releaserc ([62199d1](https://github.com/geostyler/geostyler/commit/62199d1aca5ad92b7c2d8773174b146ea727da46))
* use strict mode for tsconfig ([#1955](https://github.com/geostyler/geostyler/issues/1955)) ([c5c8201](https://github.com/geostyler/geostyler/commit/c5c8201577f278335484edebfc77c93aa6bced1c))


### Bugfixes

* add check for string before using .toLowerCase() in TextFilterField ([fea7117](https://github.com/geostyler/geostyler/commit/fea71179d212b662c502ce970bbaec98cb50fa02))
* extend version range to allow ol >=6 ([abbcc98](https://github.com/geostyler/geostyler/commit/abbcc98d7fe8c98aae62a1a6fbcc832b5d67e896))
* fix onStyleChange for async readStyle ([9416ddd](https://github.com/geostyler/geostyler/commit/9416ddd9481009b1695d73d4243a6ca1a0dc5385))
* introduce useRef for timeout ([1ed49f4](https://github.com/geostyler/geostyler/commit/1ed49f4fde38db4b50dcdb757ab9fcaebcda77eb))

## [10.0.0](https://github.com/geostyler/geostyler/compare/v9.0.1...v10.0.0) (2022-11-15)


### Features

* introduces FieldUtil ([d592d99](https://github.com/geostyler/geostyler/commit/d592d997b4afb81f954113eb35a54dc7805b0a5d))
* introduces UnsupportedPropertiesContext ([1fc6be5](https://github.com/geostyler/geostyler/commit/1fc6be53a2e1b5b76d1d3fc0134995fc61591851))


### Changes in configuration

* fix copy/paste left-over in .releaserc ([a115028](https://github.com/geostyler/geostyler/commit/a115028ba8f4b776840c22e28044a6ec06f0a736))
* introduce husky ([46f8c7d](https://github.com/geostyler/geostyler/commit/46f8c7d80dddf31137645361155e26df16d9ea22))
* introduce semanti release ([d3820a7](https://github.com/geostyler/geostyler/commit/d3820a7d983c27d156426e4039049bbed5121177))


### Bugfixes

* add missing CardLayout to index.ts ([11299e0](https://github.com/geostyler/geostyler/commit/11299e0ab7c52568603a135929b27daa000fa660))
* close curly braces on template attributes ([84fc4d1](https://github.com/geostyler/geostyler/commit/84fc4d16944b6f3ff3b497892d342a369a24aa2d))
* fix the width of some input fields ([e3de4cf](https://github.com/geostyler/geostyler/commit/e3de4cffa5dcfd1ce6ce7cc8cfe13b24fb95dc27))
* fixes label in FillEditor ([cbc757e](https://github.com/geostyler/geostyler/commit/cbc757e250d6b3178f905dd976d5ed8330c47034))
* fixes uploadbutton loading icon ([a4cc6ed](https://github.com/geostyler/geostyler/commit/a4cc6ed808ad92ace1d6395a79ae5f9e9900fbe7))
* remove unused import in example ([8856067](https://github.com/geostyler/geostyler/commit/88560678ccb62bd5e27e0f560cb00920f593eff1))
* undo propName adaption ([483c032](https://github.com/geostyler/geostyler/commit/483c0323f64838de48d04c92af3f25d80fcf5688))
* zoom to data if provided ([a6d4440](https://github.com/geostyler/geostyler/commit/a6d4440754caf76d8d03bc0805113e07e1b2ee8b))


### Breaking changes

* add nullToUndefined to onChange listener ([43757e2](https://github.com/geostyler/geostyler/commit/43757e2652f5e00568eb76bdb5377497533831e2))
* applies translations to FilterEditor ([f2286e8](https://github.com/geostyler/geostyler/commit/f2286e80647bf29d17d89c8f65e2bb614e923506))
* package updates ([#1951](https://github.com/geostyler/geostyler/issues/1951)) ([6c3b917](https://github.com/geostyler/geostyler/commit/6c3b91724e9354fe1bcbbec84a3cdb8b8d39e643))
* update geostyler-wfs-parser ([acc20e9](https://github.com/geostyler/geostyler/commit/acc20e9c680a2c7b1bee501bb3d44ce75d8d2dfe))
