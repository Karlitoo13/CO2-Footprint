const UEBERSETZUNGEN = {
    "de": {
        nav_start: "Start",
        nav_daten: "Daten",
        nav_info: "Info",
        titel: "CO2-Emissionen transparent gemacht",
        intro:"Willkommen bei CO₂Track. Diese Seite zeigt, wie viel CO₂ ausgewählte Untrernehmen weltweit jährlich ausstoßen. Alle Daten sind fiktiv und dienen nur der Demonstration.",
        start_cta:"Zu den Emissionsdaten",
        start_karte1_titel:"Transparenz",
        start_karte1_text:"Wir glauben an Transparenz in Bezug auf CO2-Emissionen. Offene Datenzu den größten Emittenten aus verschiedenen Ländern und Branchen.",
        start_karte2_titel:"Vergleichbarkeit",
        start_karte2_text:"Sortier- und filterbare Tabelle, um Länder und Unternehmen direkt miteinander zu vergleichen.",
        start_karte3_titel:"Responsives Design und Schriftkulturen",
        start_karte3_text:"Die Website ist für alle Bildschirmgrößen optimiert und unterstützt sowohl LTR- als auch RTL-Schriftkulturen.",

        tabelle_titel:"Emissionsdaten",
        daten_intro:"Nutze die Suche oder den Länderfilter, um die Daten einzugrenzen Ein Klick auf eine Spaltenüberschrift sortiert die Tabelle.",
        lokal_titel:"Auf dieser Seite",
        lokal_suche:"Suche & Filter",
        lokal_tabelle:"Tabelle",
        suche_label:"Suche (Unternehmen/Land)",
        suche_ph:"z.B. Deutschland",
        filter_label:"Nach Land filtern",
        filter_alle:"Alle Länder",
        th_land:"Land",
        th_unternehmen:"Unternehmen",
        th_branche:"Branche",
        th_emissionen:"CO₂ (Mio. t)",
        keine_treffer:"Keine Einträge gefunden.",

        info_titel:"Über dieses Projekt",
        info_text:"CO₂Track ist ein studentisches Beispielprojekt für den Kurs „Programmierung von Webanwendungsoberflächen“. Es demonstriert ein responsives Layout, eine sortier- und filterbare Tabelle sowie abgesicherte Eingabefelder.",
        info_technik_titel:"Verwendete Technik",
        info_technik_1:"HTML5 für die semantische Struktur",
        info_technik_2:"Bootstrap 5 für ein responsives Layout",
        info_technik_3:"JavaScript für Suche, Filter und Sortierung",
        info_technik_4:"Umschaltung der Schriftkultur (LTR/RTL)",

        footer_text:"Fiktives Demonstrationsprojekt einer Non-Profit-Organisation.",
        footer_impressum:"Impressum",
        footer_datenschutz:"Datenschutz",
        footer_copyright:" 2026 CO₂Track"
    },
    ar:{
        nav_start: "البداية",
        nav_daten: "البيانات",
        nav_info: "معلومات",
        titel: "شفافية انبعاثات ثاني أكسيد الكربون",
        intro:"مرحبًا بك في CO₂Track. تعرض هذه الصفحة كمية ثاني أكسيد الكربون التي تصدرها الشركات المختارة سنويًا على مستوى العالم. جميع البيانات وهمية وتستخدم لأغراض العرض فقط.",
        start_cta:"إلى بيانات الانبعاثات",
        start_karte1_titel:"الشفافية",
        start_karte1_text:"نؤمن بالشفافية فيما يتعلق بانبعاثات ثاني أكسيد الكربون. بيانات مفتوحة لأكبر الملوثين من مختلف البلدان والصناعات.",
        start_karte2_titel:"قابلية المقارنة",
        start_karte2_text:"جدول قابل للفرز والتصفية لمقارنة البلدان والشركات مباشرة.",
        start_karte3_titel:"تصميم متجاوب وثقافات الكتابة",
        start_karte3_text:"تم تحسين الموقع لجميع أحجام الشاشات ويدعم كل من ثقافات الكتابة من اليسار إلى اليمين (LTR) ومن اليمين إلى اليسار (RTL).",

        tabelle_titel:"بيانات الانبعاثات",
        daten_intro:"استخدم البحث أو مرشح البلد لتضييق البيانات. انقر على رأس العمود لفرز الجدول.",
        lokal_titel:"في هذه الصفحة",
        lokal_suche:"بحث وفلترة",
        lokal_tabelle:"جدول",
        suche_label:"بحث (شركة/بلد)",
        suche_ph:"مثال: ألمانيا",
        filter_label:"تصفية حسب البلد",
        filter_alle:"جميع البلدان",
        th_land:"البلد",
        th_unternehmen:"الشركة",
        th_branche:"الصناعة",
        th_emissionen:"ثاني أكسيد الكربون (مليون طن)",
        keine_treffer:"لم يتم العثور على أي إدخالات.",

        info_titel:"حول هذا المشروع",
        info_text:"CO₂Track هو مشروع مثال طلابي لدورة 'برمجة واجهات تطبيقات الويب'. يوضح تصميمًا متجاوبًا وجدولًا قابلًا للفرز والتصفية بالإضافة إلى حقول إدخال محمية.",
        info_technik_titel:"التقنيات المستخدمة",
        info_technik_1:"HTML5 للهيكل الدلالي",
        info_technik_2:"Bootstrap 5 لتصميم متجاوب",
        info_technik_3:"JavaScript للبحث والتصفية والفرز",
        info_technik_4:"تبديل ثقافة الكتابة (LTR/RTL)",

        footer_text:"مشروع عرض وهمي لمنظمة غير ربحية.",
        footer_impressum:"إشعار قانوني",
        footer_datenschutz:"سياسة الخصوصية",
        footer_copyright:" 2026 CO₂Track"   
    }
};

let aktuelleSprache = "de";

function spracheSetzen(sprache) {
    aktuelleSprache = sprache;
    const texte = UEBERSETZUNGEN[sprache];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
        const schluessel = el.getAttribute("data-i18n");
        if (texte[schluessel]) {
            el.textContent = texte[schluessel];
        }
    } );
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
        const schluessel = el.getAttribute("data-i18n-ph");
        if (texte[schluessel]) {
            el.setAttribute("placeholder", texte[schluessel]);
        }
    } );
    const html = document.documentElement;
    if (sprache === "ar") {
        html.setAttribute("dir", "rtl");
        html.setAttribute("lang", "ar");
    } else {
        html.setAttribute("dir", "ltr");
        html.setAttribute("lang", "de");
    }
    const label = document.getElementById("langLabel");
    if (label){
        label.textContent = (sprache === "de") ? "عربى(RTL)" : "Deutsch(LTR)"; 
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const gespeichert = localStorage.getItem("co2track_sprache") || "de";
    spracheSetzen(gespeichert);

    const button = document.getElementById("langToggle");
    if (button) {
        button.addEventListener("click", function () {
            const neu = (aktuelleSprache === "de") ? "ar" : "de";
            spracheSetzen(neu);
            localStorage.setItem("co2track_sprache", neu);
        });
    }
}); 