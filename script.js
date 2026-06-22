const questions = {
  shop: {
    name: 'Onlineshop',
    categories: [
      {
        name: 'Impressum',
        items: [
          { id: 's-imp-1', text: 'Name und Anschrift des Unternehmens', desc: 'Vollständiger Name, Straße, Hausnummer, PLZ, Stadt' },
          { id: 's-imp-2', text: 'Kontaktdaten', desc: 'Telefonnummer und E-Mail-Adresse' },
          { id: 's-imp-3', text: 'Handelsregister-Eintrag', desc: 'Registergericht und Registernummer (falls eingetragen)' },
          { id: 's-imp-4', text: 'Umsatzsteuer-ID', desc: 'Wenn vorhanden: DE-Nummer' },
          { id: 's-imp-5', text: 'Vertretungsberechtigte Person', desc: 'Geschäftsführer oder Vorstand' },
          { id: 's-imp-6', text: 'Aufsichtsbehörde', desc: 'Nur bei zulassungspflichtigen Berufen erforderlich' },
        ]
      },
      {
        name: 'Datenschutzerklärung',
        items: [
          { id: 's-ds-1', text: 'Verantwortlicher benannt', desc: 'Name und Kontaktdaten des Verantwortlichen (Art. 13 DSGVO)' },
          { id: 's-ds-2', text: 'Zwecke der Verarbeitung', desc: 'Wofür werden Daten verarbeitet? (Bestellabwicklung, Kontakt, etc.)' },
          { id: 's-ds-3', text: 'Rechtsgrundlagen aufgeführt', desc: 'Art. 6 DSGVO: Einwilligung, Vertrag, berechtigtes Interesse, etc.' },
          { id: 's-ds-4', text: 'Cookies & Tracking beschrieben', desc: 'Welche Cookies, wofür, Speicherdauer' },
          { id: 's-ds-5', text: 'Datenweitergabe an Dritte', desc: 'Zahlungsdienstleister, Versanddienstleister, etc.' },
          { id: 's-ds-6', text: 'Betroffenenrechte', desc: 'Auskunft, Berichtigung, Löschung, Datenübertragbarkeit (Art. 15-22 DSGVO)' },
          { id: 's-ds-7', text: 'Datenempfänger außerhalb der EU', desc: 'Z.B. Google Analytics, Mailchimp (USA) — Angemessenheitsbeschluss oder SCCs' },
        ]
      },
      {
        name: 'Cookie-Banner',
        items: [
          { id: 's-cb-1', text: 'Cookie-Banner implementiert', desc: 'Beim ersten Besuch erscheint ein Cookie-Hinweis (§ 25 TTDSG)' },
          { id: 's-cb-2', text: 'Granulare Einwilligung', desc: 'Getrennte Auswahl für essenziell / funktional / marketing / statistik' },
          { id: 's-cb-3', text: 'Opt-in statt Opt-out', desc: 'Keine vorausgefüllten Häkchen für nicht-essenzielle Cookies' },
          { id: 's-cb-4', text: 'Nachweis der Einwilligung', desc: 'Einwilligungs-Status wird gespeichert (Cookie-Consent-Tool)' },
        ]
      },
      {
        name: 'AGB',
        items: [
          { id: 's-agb-1', text: 'Allgemeine Geschäftsbedingungen', desc: 'Vertragsschluss, Zahlung, Lieferung, Gewährleistung' },
          { id: 's-agb-2', text: 'Kundeninformationen vor Vertragsschluss', desc: 'Gemäß § 312g BGB i.V.m. Art. 246 EGBGB' },
        ]
      },
      {
        name: 'Widerrufsbelehrung',
        items: [
          { id: 's-wid-1', text: 'Widerrufsbelehrung vorhanden', desc: 'Belehrung über das gesetzliche Widerrufsrecht (§ 355 BGB)' },
          { id: 's-wid-2', text: 'Widerrufsformular', desc: 'Muster-Widerrufsformular (Anlage 2 zu Art. 246a § 1 Abs. 2 EGBGB)' },
          { id: 's-wid-3', text: 'Widerrufsfrist korrekt angegeben', desc: '14 Tage ab Erhalt der Ware (§ 355 Abs. 2 BGB)' },
        ]
      },
      {
        name: 'Versand & Zahlung',
        items: [
          { id: 's-vz-1', text: 'Versandinformationen', desc: 'Liefergebiete, Versandkosten, Lieferzeiten' },
          { id: 's-vz-2', text: 'Zahlungsmethoden aufgeführt', desc: 'Alle akzeptierten Zahlungsarten mit Details' },
          { id: 's-vz-3', text: 'Preise inkl. Mehrwertsteuer', desc: 'Alle Preise mit „inkl. MwSt.“ oder „zzgl. MwSt.“ deklariert' },
        ]
      }
    ]
  },
  blog: {
    name: 'Blog / Content-Seite',
    categories: [
      {
        name: 'Impressum',
        items: [
          { id: 'b-imp-1', text: 'Name und Anschrift', desc: 'Vollständiger Name, Straße, Hausnummer, PLZ, Stadt' },
          { id: 'b-imp-2', text: 'Kontaktdaten', desc: 'Telefonnummer und E-Mail-Adresse' },
          { id: 'b-imp-3', text: 'Verantwortlich für den Inhalt', desc: 'Gemäß § 55 Abs. 2 RStV bei redaktionellen Inhalten' },
          { id: 'b-imp-4', text: 'Umsatzsteuer-ID', desc: 'Wenn vorhanden und geschäftlich genutzt' },
        ]
      },
      {
        name: 'Datenschutzerklärung',
        items: [
          { id: 'b-ds-1', text: 'Verantwortlicher benannt', desc: 'Name und Kontaktdaten des Verantwortlichen (Art. 13 DSGVO)' },
          { id: 'b-ds-2', text: 'Zwecke der Verarbeitung', desc: 'Kontaktformular, Kommentare, Newsletter, etc.' },
          { id: 'b-ds-3', text: 'Cookies & Tracking beschrieben', desc: 'Insbesondere wenn Google Analytics, Ads, etc. verwendet werden' },
          { id: 'b-ds-4', text: 'Datenempfänger außerhalb der EU', desc: 'Z.B. Google, Meta, Mailchimp — Angemessenheitsbeschluss oder SCCs' },
          { id: 'b-ds-5', text: 'Betroffenenrechte', desc: 'Auskunft, Berichtigung, Löschung (Art. 15-22 DSGVO)' },
          { id: 'b-ds-6', text: 'Widerspruchsrecht', desc: 'Art. 21 DSGVO, insbesondere bei Direktwerbung' },
        ]
      },
      {
        name: 'Cookie-Banner',
        items: [
          { id: 'b-cb-1', text: 'Cookie-Banner implementiert', desc: 'Beim ersten Besuch erforderlich (§ 25 TTDSG)' },
          { id: 'b-cb-2', text: 'Granulare Einwilligung', desc: 'Getrennte Auswahl essenziell / statistik / marketing' },
          { id: 'b-cb-3', text: 'Nachweis der Einwilligung', desc: 'Einwilligungs-Status wird gespeichert' },
        ]
      }
    ]
  },
  saas: {
    name: 'SaaS / Webanwendung',
    categories: [
      {
        name: 'Impressum',
        items: [
          { id: 'sa-imp-1', text: 'Name und Anschrift', desc: 'Vollständiger Name, Straße, Hausnummer, PLZ, Stadt' },
          { id: 'sa-imp-2', text: 'Kontaktdaten', desc: 'Telefonnummer und E-Mail-Adresse' },
          { id: 'sa-imp-3', text: 'Handelsregister-Eintrag', desc: 'Registergericht und Registernummer (falls eingetragen)' },
          { id: 'sa-imp-4', text: 'Umsatzsteuer-ID', desc: 'DE-Nummer wenn vorhanden' },
          { id: 'sa-imp-5', text: 'Vertretungsberechtigte Person', desc: 'Geschäftsführer oder Vorstand' },
        ]
      },
      {
        name: 'Datenschutzerklärung',
        items: [
          { id: 'sa-ds-1', text: 'Verantwortlicher benannt', desc: 'Name und Kontaktdaten des Verantwortlichen' },
          { id: 'sa-ds-2', text: 'Verarbeitungszwecke aufgeführt', desc: 'Registrierung, Nutzung, Abrechnung, Support' },
          { id: 'sa-ds-3', text: 'Hosting & Infrastruktur', desc: 'Wo werden die Server betrieben? (Standort, Anbieter)' },
          { id: 'sa-ds-4', text: 'Cookies & Tracking beschrieben', desc: 'Session-Cookies, CSRF-Token, Analytics' },
          { id: 'sa-ds-5', text: 'AV-Vertrag erwähnt', desc: 'Auftragsverarbeitungsvertrag mit Hosting-Anbieter (Art. 28 DSGVO)' },
          { id: 'sa-ds-6', text: 'Datenempfänger außerhalb der EU', desc: 'Z.B. Cloud-Hosting in den USA — SCCs erforderlich' },
          { id: 'sa-ds-7', text: 'Betroffenenrechte', desc: 'Auskunft, Berichtigung, Löschung, Datenübertragbarkeit' },
          { id: 'sa-ds-8', text: 'Speicherdauer & Löschfristen', desc: 'Wie lange werden Nutzerdaten gespeichert?' },
        ]
      },
      {
        name: 'Cookie-Banner',
        items: [
          { id: 'sa-cb-1', text: 'Cookie-Banner implementiert', desc: 'Beim ersten Besuch erforderlich (§ 25 TTDSG)' },
          { id: 'sa-cb-2', text: 'Granulare Einwilligung', desc: 'Essenziell / funktional / statistik / marketing' },
          { id: 'sa-cb-3', text: 'Nachweis der Einwilligung', desc: 'Einwilligungs-Status wird gespeichert' },
        ]
      },
      {
        name: 'AGB (falls kostenpflichtig)',
        items: [
          { id: 'sa-agb-1', text: 'Allgemeine Geschäftsbedingungen', desc: 'Vertragsschluss, Laufzeit, Kündigung, Haftung' },
          { id: 'sa-agb-2', text: 'Leistungsbeschreibung', desc: 'Welche Funktionen, Verfügbarkeit, SLAs' },
          { id: 'sa-agb-3', text: 'Kündigungsfristen', desc: 'Wie und wann kann gekündigt werden?' },
        ]
      },
      {
        name: 'Widerrufsbelehrung (falls B2C)',
        items: [
          { id: 'sa-wid-1', text: 'Widerrufsbelehrung vorhanden', desc: 'Bei B2C-Verträgen gesetzlich vorgeschrieben' },
          { id: 'sa-wid-2', text: 'Widerrufsformular', desc: 'Muster-Widerrufsformular beigefügt' },
        ]
      }
    ]
  },
  freelance: {
    name: 'Freelancer / Dienstleistung',
    categories: [
      {
        name: 'Impressum',
        items: [
          { id: 'f-imp-1', text: 'Name und Anschrift', desc: 'Vollständiger Name, Straße, Hausnummer, PLZ, Stadt' },
          { id: 'f-imp-2', text: 'Kontaktdaten', desc: 'Telefonnummer und E-Mail-Adresse' },
          { id: 'f-imp-3', text: 'Berufsbezeichnung', desc: 'Bei reglementierten Berufen: Kammer, Titel, Rechtsverleih' },
          { id: 'f-imp-4', text: 'Umsatzsteuer-ID', desc: 'DE-Nummer wenn vorhanden' },
        ]
      },
      {
        name: 'Datenschutzerklärung',
        items: [
          { id: 'f-ds-1', text: 'Verantwortlicher benannt', desc: 'Name und Kontaktdaten des Verantwortlichen' },
          { id: 'f-ds-2', text: 'Verarbeitungszwecke', desc: 'Kontaktanfragen, Angebotserstellung, Projektabwicklung' },
          { id: 'f-ds-3', text: 'Cookies & Tracking', desc: 'Falls verwendet (z.B. Google Analytics, Calendly)' },
          { id: 'f-ds-4', text: 'Betroffenenrechte', desc: 'Auskunft, Berichtigung, Löschung' },
        ]
      },
      {
        name: 'Cookie-Banner',
        items: [
          { id: 'f-cb-1', text: 'Cookie-Banner implementiert', desc: 'Falls Tracking-Cookies verwendet werden' },
          { id: 'f-cb-2', text: 'Granulare Einwilligung', desc: 'Essenziell / statistik / marketing' },
        ]
      },
      {
        name: 'AGB (optional)',
        items: [
          { id: 'f-agb-1', text: 'AGB vorhanden', desc: 'Empfohlen zur Regelung von Zahlung, Gewährleistung, Haftung' },
        ]
      }
    ]
  },
  local: {
    name: 'Lokales Gewerbe',
    categories: [
      {
        name: 'Impressum',
        items: [
          { id: 'l-imp-1', text: 'Name und Anschrift', desc: 'Vollständiger Name, Straße, Hausnummer, PLZ, Stadt' },
          { id: 'l-imp-2', text: 'Kontaktdaten', desc: 'Telefonnummer und E-Mail-Adresse' },
          { id: 'l-imp-3', text: 'Handelsregister-Eintrag', desc: 'Registergericht und Registernummer (falls eingetragen)' },
          { id: 'l-imp-4', text: 'Aufsichtsbehörde', desc: 'Bei zulassungspflichtigen Berufen (z.B. Handwerk)' },
        ]
      },
      {
        name: 'Datenschutzerklärung',
        items: [
          { id: 'l-ds-1', text: 'Verantwortlicher benannt', desc: 'Name und Kontaktdaten des Verantwortlichen' },
          { id: 'l-ds-2', text: 'Verarbeitungszwecke', desc: 'Terminbuchung, Kontaktanfragen' },
          { id: 'l-ds-3', text: 'Cookies', desc: 'Falls verwendet (z.B. Google Maps, Analytics)' },
          { id: 'l-ds-4', text: 'Betroffenenrechte', desc: 'Auskunft, Berichtigung, Löschung' },
        ]
      },
      {
        name: 'Cookie-Banner',
        items: [
          { id: 'l-cb-1', text: 'Cookie-Banner implementiert', desc: 'Falls nicht-essenzielle Cookies verwendet werden' },
        ]
      }
    ]
  },
  verein: {
    name: 'Verein / Non-Profit',
    categories: [
      {
        name: 'Impressum',
        items: [
          { id: 'v-imp-1', text: 'Name des Vereins', desc: 'Vollständiger Vereinsname' },
          { id: 'v-imp-2', text: 'Anschrift des Vereins', desc: 'Straße, Hausnummer, PLZ, Stadt' },
          { id: 'v-imp-3', text: 'Kontaktdaten', desc: 'Telefonnummer und E-Mail-Adresse' },
          { id: 'v-imp-4', text: 'Vertretungsberechtigter Vorstand', desc: 'Namen der Vorstandsmitglieder (§ 26 BGB)' },
          { id: 'v-imp-5', text: 'Registergericht & Registernummer', desc: 'Vereinsregister-Nummer' },
          { id: 'v-imp-6', text: 'Aufsichtsbehörde', desc: 'Falls gemeinnützig: Finanzamt mit Steuernummer' },
        ]
      },
      {
        name: 'Datenschutzerklärung',
        items: [
          { id: 'v-ds-1', text: 'Verantwortlicher benannt', desc: 'Name des Vorstands als Verantwortlicher' },
          { id: 'v-ds-2', text: 'Verarbeitungszwecke', desc: 'Mitgliederverwaltung, Spendenabwicklung, Kommunikation' },
          { id: 'v-ds-3', text: 'Cookies & Tracking', desc: 'Falls verwendet' },
          { id: 'v-ds-4', text: 'Betroffenenrechte', desc: 'Auskunft, Berichtigung, Löschung' },
        ]
      },
      {
        name: 'Cookie-Banner',
        items: [
          { id: 'v-cb-1', text: 'Cookie-Banner implementiert', desc: 'Falls nicht-essenzielle Cookies verwendet werden' },
        ]
      }
    ]
  }
};

let state = {
  type: null,
  checkedItems: {},
  currentCategory: 0
};

function startCheck(type) {
  state.type = type;
  state.checkedItems = {};
  state.currentCategory = 0;

  document.querySelectorAll('.type-card').forEach(c => c.classList.remove('selected'));
  document.querySelector(`[data-type="${type}"]`).classList.add('selected');

  document.getElementById('checklist').classList.add('active');
  document.getElementById('results').classList.remove('active');
  document.getElementById('hero').style.display = 'none';

  renderSteps();
  renderCategory();
  window.scrollTo({ top: document.getElementById('checklist').offsetTop - 80, behavior: 'smooth' });
}

function renderSteps() {
  const cat = questions[state.type].categories;
  const container = document.getElementById('steps-list');
  container.innerHTML = cat.map((c, i) => {
    const itemIds = c.items.map(it => it.id);
    const allChecked = itemIds.every(id => state.checkedItems[id]);
    const someChecked = itemIds.some(id => state.checkedItems[id]);
    let cls = 'step-item';
    if (i === state.currentCategory) cls += ' active';
    else if (allChecked) cls += ' completed';
    else if (someChecked) cls += ' partial';
    const numCls = allChecked ? 'completed' : (i === state.currentCategory ? 'active' : '');
    return `<div class="${cls}" onclick="goToStep(${i})">
      <span class="step-number ${numCls}">${allChecked ? '✓' : (i + 1)}</span>
      <span>${c.name}</span>
    </div>`;
  }).join('');
  updateProgress();
}

function renderCategory() {
  const cat = questions[state.type].categories[state.currentCategory];
  const container = document.getElementById('question-content');
  container.innerHTML = `<h3>${cat.name}</h3>
    <div class="checklist-items">
      ${cat.items.map(it => {
        const checked = state.checkedItems[it.id] || false;
        return `<label class="check-item">
          <input type="checkbox" class="check-input" ${checked ? 'checked' : ''} onchange="toggleItem('${it.id}', this.checked)">
          <span class="check-visual"></span>
          <div>
            <div class="check-label">${it.text}</div>
            <div class="check-desc">${it.desc}</div>
          </div>
        </label>`;
      }).join('')}
    </div>`;

  const total = cat.items.length;
  const done = cat.items.filter(it => state.checkedItems[it.id]).length;

  document.getElementById('nav-buttons').innerHTML = `
    <button class="btn btn-secondary" onclick="prevStep()" ${state.currentCategory === 0 ? 'disabled' : ''}>← Zurück</button>
    <span style="font-size:0.875rem;color:var(--color-text-secondary);align-self:center;">${done}/${total} erledigt</span>
    <button class="btn btn-primary" onclick="nextStep()">${state.currentCategory === questions[state.type].categories.length - 1 ? 'Ergebnis anzeigen →' : 'Weiter →'}</button>
  `;

  renderSteps();
  window.scrollTo({ top: document.getElementById('question-content').offsetTop - 100, behavior: 'smooth' });
}

function toggleItem(id, checked) {
  state.checkedItems[id] = checked;
  renderSteps();
  renderCategory();
}

function nextStep() {
  const cats = questions[state.type].categories;
  if (state.currentCategory < cats.length - 1) {
    state.currentCategory++;
    renderCategory();
  } else {
    showResults();
  }
}

function prevStep() {
  if (state.currentCategory > 0) {
    state.currentCategory--;
    renderCategory();
  }
}

function goToStep(i) {
  if (i >= 0 && i < questions[state.type].categories.length) {
    state.currentCategory = i;
    renderCategory();
  }
}

function updateProgress() {
  const total = questions[state.type].categories.reduce((sum, c) => sum + c.items.length, 0);
  const done = Object.values(state.checkedItems).filter(Boolean).length;
  document.getElementById('progress-text').textContent = `${done} von ${total} Punkten geprüft`;
  document.getElementById('progress-fill').style.width = `${Math.round((done / total) * 100)}%`;
}

function showResults() {
  const type = questions[state.type];
  const allItems = type.categories.flatMap(c => c.items);
  const total = allItems.length;
  const done = allItems.filter(it => state.checkedItems[it.id]).length;
  const pct = Math.round((done / total) * 100);

  document.getElementById('checklist').classList.remove('active');
  document.getElementById('results').classList.add('active');

  let scoreCls = 'low';
  let verdict = 'Verbesserungsbedürftig';
  if (pct >= 80) { scoreCls = 'high'; verdict = 'Gut aufgestellt'; }
  else if (pct >= 50) { scoreCls = 'medium'; verdict = 'Teilweise vollständig'; }

  document.getElementById('score-circle').className = `score-circle ${scoreCls}`;
  document.getElementById('score-circle').textContent = `${pct}%`;
  document.getElementById('score-verdict').textContent = verdict;
  document.getElementById('score-detail').textContent = `${done} von ${total} Compliance-Punkten erfüllt`;

  const catContainer = document.getElementById('result-categories');
  catContainer.innerHTML = type.categories.map(cat => {
    const itemIds = cat.items.map(it => it.id);
    const catDone = itemIds.filter(id => state.checkedItems[id]).length;
    const catPct = Math.round((catDone / cat.items.length) * 100);
    let status, statusCls;
    if (catPct === 100) { status = 'Vollständig'; statusCls = 'erfuellt'; }
    else if (catPct > 0) { status = 'Teilweise'; statusCls = 'teilweise'; }
    else { status = 'Offen'; statusCls = 'offen'; }

    return `<div class="result-category">
      <div class="category-header" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='none'?'block':'none'">
        <h3>${cat.name}</h3>
        <span class="category-status ${statusCls}">${status} (${catDone}/${cat.items.length})</span>
      </div>
      <div class="category-items">
        ${cat.items.map(it => {
          const ch = state.checkedItems[it.id];
          return `<div class="result-item">
            <span class="status-icon ${ch ? 'checked' : 'unchecked'}">${ch ? '✓' : '✗'}</span>
            <span>${it.text}</span>
          </div>`;
        }).join('')}
        ${catPct < 100 ? `<div class="template-block">${getTemplateSnippet(cat.name)}<button class="copy-btn" onclick="copyTemplate(this)">Kopieren</button></div>` : ''}
      </div>
    </div>`;
  }).join('');

  document.getElementById('result-actions').innerHTML = `
    <button class="btn btn-secondary" onclick="resetAll()">← Neu starten</button>
    <button class="btn btn-accent" onclick="window.print()">📄 Bericht drucken</button>
  `;
}

function getTemplateSnippet(category) {
  const templates = {
    'Impressum': `Angaben gemäß § 5 TMG\n\n[Name des Unternehmens/Person]\n[Straße Hausnummer]\n[PLZ Ort]\n\nKontakt:\nTelefon: [Telefonnummer]\nE-Mail: [E-Mail-Adresse]\n\nHandelsregister: [Registergericht] HRB [Nummer]\nUmsatzsteuer-ID: DE[Nummer]\n\nVertreten durch: [Name des Geschäftsführers]`,
    'Datenschutzerklärung': `Datenschutzerklärung\n\n1. Verantwortlicher\n[Name, Adresse, Kontakt]\n\n2. Zwecke der Verarbeitung\n[Auflistung der Zwecke]\n\n3. Rechtsgrundlagen\nArt. 6 Abs. 1 lit. a-f DSGVO\n\n4. Betroffenenrechte\nAuskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17)`,
    'Cookie-Banner': `Cookie-Einstellungen\n\nEssenziell (immer aktiv):\n- Session-Cookie\n- CSRF-Token\n\nStatistik:\n- Google Analytics (opt-in)\n\nMarketing:\n- [Drittanbieter-Cookies] (opt-in)`,
    'AGB': `Allgemeine Geschäftsbedingungen\n\n§1 Geltungsbereich\n§2 Vertragsschluss\n§3 Preise und Zahlung\n§4 Lieferung/Leistung\n§5 Widerrufsrecht\n§6 Gewährleistung\n§7 Haftung\n§8 Schlussbestimmungen`,
    'Widerrufsbelehrung': `Widerrufsbelehrung\n\nSie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.\n\nDie Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter die letzte Ware in Besitz genommen haben.`,
    'Versand & Zahlung': `Versandinformationen\n\nVersandkosten: [Betrag] innerhalb Deutschlands\nLieferzeit: [X] Werktage\nZahlungsmethoden: [Auflistung]`,
    'Versand': `Versandinformationen\n\nVersandkosten: [Betrag] innerhalb Deutschlands\nLieferzeit: [X] Werktage\nZahlungsmethoden: [Auflistung]`
  };
  return templates[category] || `Template für ${category} — bitte recherchieren Sie die genauen gesetzlichen Anforderungen.`;
}

function copyTemplate(btn) {
  const block = btn.parentElement;
  const text = block.textContent.replace('Kopieren', '').trim();
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = 'Kopiert!';
    setTimeout(() => { btn.textContent = 'Kopieren'; }, 2000);
  });
}

function resetAll() {
  state = { type: null, checkedItems: {}, currentCategory: 0 };
  document.getElementById('checklist').classList.remove('active');
  document.getElementById('results').classList.remove('active');
  document.getElementById('hero').style.display = 'block';
  document.querySelectorAll('.type-card').forEach(c => c.classList.remove('selected'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
