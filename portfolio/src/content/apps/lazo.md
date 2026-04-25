---
name: Lazo
status: dev
statusLabel: In Development
statusLabelEs: En Desarrollo
year: "2024"
platform: iOS
tags: [Swift 6.0, SwiftUI, SwiftData, AppIntents, Canvas]
resumen: "Personal CRM for iOS built around a 2D orbital relationship map. 100 Swift files, 72 SwiftUI views, 9 SwiftData models, Siri integration in Spanish. No external dependencies — pure Apple frameworks with Swift 6.0 strict concurrency."
resumenEs: "CRM personal para iOS construido alrededor de un mapa orbital 2D de relaciones. 100 archivos Swift, 72 vistas SwiftUI, 9 modelos SwiftData, integración Siri en español. Sin dependencias externas — frameworks nativos de Apple con Swift 6.0 strict concurrency."
tagline: "Your relationship garden."
taglineEs: "Tu jardín de relaciones."
bg: "#1e2a1e"
heroColor: "#172017"
letter: L
tech:
  - { category: Language, items: "Swift 6.0 · Strict concurrency" }
  - { category: UI, items: "SwiftUI · Canvas · KeyframeAnimator" }
  - { category: Data, items: "SwiftData · @Observable · @Query" }
  - { category: Siri, items: "AppIntents · Spanish localization" }
  - { category: Contacts, items: "CNContactStore · ContactsUI" }
  - { category: Architecture, items: "MVVM · Custom EnvironmentKey DI" }
  - { category: Tools, items: "Xcode · SF Symbols · No external dependencies" }
features:
  - "2D orbital relationship map — 6 isochronous rings (3d–10yr) with deterministic positioning by UUID hash"
  - "Relational health engine — daysSinceContact / contactFrequencyDays ratio with 4 states (.good / .due / .overdue / .unknown)"
  - "Siri with 4 Spanish intents — LogInteraction, CreateReminder, RecommendContacts, GetNextContactDate"
  - "Bidirectional sync with native Contacts via CNContactStore with deduplication by contactIdentifier"
  - "45+ animation declarations — bloom, radial particles, spring transitions, 120s orbital cycles"
  - "Dual dashboard — SmartHome (production) and PlayfulSmartHome (gamified garden) with streak tracking across 7 milestones"
  - "Zero external dependencies — 100% Apple frameworks, Swift 6.0 strict concurrency"
featuresEs:
  - "Mapa orbital 2D de relaciones — 6 anillos isócronos (3d–10yr) con posicionamiento determinístico por UUID hash"
  - "Motor de salud relacional — ratio daysSinceContact / contactFrequencyDays con 4 estados (.good / .due / .overdue / .unknown)"
  - "Siri con 4 intents en español — LogInteraction, CreateReminder, RecommendContacts, GetNextContactDate"
  - "Sincronización bidireccional con Contactos nativos via CNContactStore con deduplicación por contactIdentifier"
  - "45+ declaraciones de animación — bloom, partículas radiales, transiciones spring, ciclos orbitales de 120 s"
  - "Dashboard dual — SmartHome (producción) y PlayfulSmartHome (jardín gamificado) con streak tracking en 7 hitos"
  - "Sin dependencias externas — 100% Apple frameworks, Swift 6.0 strict concurrency"
statusNote: "In development. No release date set."
statusNoteEs: "En desarrollo. Sin fecha de lanzamiento definida."
order: 3
appStoreUrl: null
webUrl: null
---

Lazo es un CRM personal para iOS construido alrededor de una metáfora de jardín: tus relaciones viven en un mapa orbital 2D donde la distancia al centro refleja cuánto tiempo llevas sin contactar a alguien.

El proyecto nació de una necesidad real: mantener relaciones personales de forma intencional sin depender de redes sociales ni calendarios complicados. 100 archivos Swift, ~11,200 líneas de código, cero dependencias externas.

## Arquitectura

MVVM con un ServiceContainer de 10 managers inyectados via custom EnvironmentKey — sin singletons en cascada, sin prop drilling. 9 modelos SwiftData con relaciones y reglas de borrado en cascada. Swift 6.0 strict concurrency con aislamiento global @MainActor.

## Visualización orbital

El mapa renderiza contactos en 6 anillos isócronos (de 3 días a 10 años) usando Canvas nativo. Cada nodo tiene posición determinística derivada del UUID hash — sin saltos al reordenar. Zoom simultáneo y pan con rubber band physics (±80% límites de viewport, escala 0.25×–8×).

## Siri en español

4 intents localizados: LogInteraction, CreateReminder, RecommendContacts, GetNextContactDate. PersonEntity queryable con predicado, y RelativeDateTimeFormatter con locale es_ES para respuestas naturales en español.

## Motor de salud relacional

`ratio = daysSinceContact / contactFrequencyDays` clasifica cada contacto en 4 estados de salud, impulsando recomendaciones priorizadas, sugerencias de fin de semana y actualizaciones reactivas en las 72 vistas.
