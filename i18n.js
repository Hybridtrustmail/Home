const messages = {
  en: {
    pageTitle: 'Motion Lab — Interactive Automotive Calculation Guidance',
    pageDescription: 'Interactive guidance for calculations in automotive and engineering subjects, with vehicle, powertrain, and maintenance projects.',
    home: 'Motion Lab home', projects: 'Projects', language: 'Language', heroImage: 'Vehicle viewed from the front left in a dark studio',
    vehicle: 'Vehicle', powertrain: 'Powertrain', maintenance: 'Maintenance',
    subjectVehicle: 'Automobiles: theory of operating properties and calculation',
    subjectPowertrain: 'Automotive power plants', subjectMaintenance: 'Technical operation of automobiles',
    eyebrow: 'Learning through calculation',
    headline: 'Interactive guidance for calculations in core automotive subjects.',
    intro: 'Explore vehicle, powertrain, and maintenance topics through visual models and clear calculation methods.',
    departments: 'Related departments', transportDepartment: 'Automobile Transport Department ↗',
    technicalDepartment: 'General Technical Disciplines Department ↗',
    choose: 'Choose a project', chooseIntro: 'Start with the whole vehicle, look inside the powertrain, or plan what comes next.',
    numberVehicle: '01 / VEHICLE', numberPowertrain: '02 / POWERTRAIN', numberMaintenance: '03 / MAINTENANCE',
    vehicleIntro: "Calculate traction, acceleration, braking and fuel consumption, then prepare an engineering report.",
    powertrainIntro: "Calculate combustion-engine cycles and compare electric and hybrid power-source options.",
    maintenanceIntro: "Plan service-station workloads, work bays and diagnostic operations in a teaching workbook.",
    explore: 'Explore project', detailHeading: 'What each project covers', details: 'Project details',
    complete: "Vehicle performance and design", inside: "Engine and power-source calculations", running: "Service-station planning and diagnostics",
    vehicleDetail: "The “Automobiles: theory of operating properties and calculation” project combines a methodical guide with an interactive calculation worksheet. Set vehicle class, payload and road conditions; calculate traction, transmission ratios, acceleration, braking and cycle fuel consumption. Save a project and export a report with formulas, substitutions and charts.",
    powertrainDetail: "The “Automotive power plants” project provides design and checking calculations for combustion engines, electric and hybrid power sources. Explore cycle pressure, forces and torque, reference fuel maps and driving scenarios. Export calculation reports, diagrams and CSV results.",
    maintenanceDetail: "TEA is a teaching project for a multi-brand service station. Compare workloads and bay schedules, resolve operation conflicts, and work through ABS, measurement-uncertainty and wheel-alignment/ADAS exercises.",
    footer: 'Motion Lab · Vehicle / Powertrain / Maintenance',
    modelVehicle: 'Interactive sports car model', modelPowertrain: 'Interactive truck chassis model', modelMaintenance: 'Interactive vehicle fleet model',
    hint: 'Drag to rotate · Scroll to zoom', keyboardHint: 'Arrow keys rotate, + and − zoom. On touchscreens use two fingers.',
    resetVehicle: 'Reset sports car view', resetPowertrain: 'Reset truck chassis view', resetMaintenance: 'Reset vehicle fleet view',
    loadingVehicle: 'Loading sports car…', loadingPowertrain: 'Loading truck chassis…', loadingMaintenance: 'Loading vehicle fleet…',
    unavailable: '3D unavailable', restore: 'Reload to restore 3D',
  },
  uk: {
    pageTitle: 'Motion Lab — Інтерактивні методичні вказівки до розрахунків',
    pageDescription: 'Інтерактивні методичні вказівки до розрахунків з автомобільних та інженерних дисциплін: автомобіль, силовий агрегат і технічне обслуговування.',
    home: 'Головна сторінка Motion Lab', projects: 'Проєкти', language: 'Мова', heroImage: 'Автомобіль у темній студії, вигляд спереду зліва',
    vehicle: 'Автомобіль', powertrain: 'Силовий агрегат', maintenance: 'Обслуговування',
    subjectVehicle: 'Автомобілі (теорія експлуатаційних властивостей та розрахунку)',
    subjectPowertrain: 'Енергетичні силові установки автомобілів', subjectMaintenance: 'Технічна експлуатація автомобілів',
    eyebrow: 'Навчання через розрахунки',
    headline: 'Інтерактивні методичні вказівки до розрахунків з основних автомобільних дисциплін.',
    intro: 'Досліджуйте автомобіль, силовий агрегат і технічне обслуговування за допомогою наочних моделей та зрозумілих методик розрахунку.',
    departments: 'Пов’язані кафедри', transportDepartment: 'Кафедра «Автомобільний транспорт» ↗',
    technicalDepartment: 'Кафедра загальнотехнічних дисциплін ↗',
    choose: 'Оберіть проєкт', chooseIntro: 'Почніть з автомобіля в цілому, дослідіть силовий агрегат або сплануйте технічне обслуговування.',
    numberVehicle: '01 / АВТОМОБІЛЬ', numberPowertrain: '02 / СИЛОВИЙ АГРЕГАТ', numberMaintenance: '03 / ОБСЛУГОВУВАННЯ',
    vehicleIntro: "Розраховуйте тягу, розгін, гальмування та витрату палива й оформлюйте розрахунковий звіт.",
    powertrainIntro: "Розраховуйте робочий цикл ДВЗ і порівнюйте електричні та гібридні силові установки.",
    maintenanceIntro: "Плануйте завантаження СТО, робочих постів і діагностичні операції в навчальній робочій книзі.",
    explore: 'Перейти до проєкту', detailHeading: 'Що охоплює кожен проєкт', details: 'Опис проєктів',
    complete: "Експлуатаційні властивості та проєктування", inside: "Розрахунок двигуна та силової установки", running: "Планування СТО та діагностування",
    vehicleDetail: "Проєкт «Автомобілі (теорія експлуатаційних властивостей та розрахунку)» поєднує методичні вказівки з інтерактивним розрахунком. Задайте клас автомобіля, навантаження й дорожні умови; визначайте тягові характеристики, передатні числа, розгін, гальмування та витрату палива в їздовому циклі. Зберігайте проєкт і формуйте звіт із формулами, підстановками та графіками.",
    powertrainDetail: "Проєкт «Енергетичні силові установки автомобілів» містить проєктний і перевірочний розрахунок ДВЗ, електричного та гібридного тракту. Досліджуйте тиск робочого циклу, сили й крутний момент, референсні паливні карти та їздові сценарії. Експортуйте розрахункові звіти, діаграми й результати CSV.",
    maintenanceDetail: "TEA — навчальний проєкт багатомарочної СТО. Порівнюйте завантаження й розклад постів, усувайте конфлікти операцій; виконуйте вправи з ABS, похибок вимірювання та геометрії коліс і ADAS.",
    footer: 'Motion Lab · Автомобіль / Силовий агрегат / Обслуговування',
    modelVehicle: 'Інтерактивна модель спортивного автомобіля', modelPowertrain: 'Інтерактивна модель шасі вантажівки', modelMaintenance: 'Інтерактивна модель автопарку',
    hint: 'Перетягуйте для обертання · Прокручуйте для масштабування', keyboardHint: 'Стрілки обертають, + та − змінюють масштаб. На сенсорному екрані використовуйте два пальці.',
    resetVehicle: 'Скинути ракурс спортивного автомобіля', resetPowertrain: 'Скинути ракурс шасі вантажівки', resetMaintenance: 'Скинути ракурс автопарку',
    loadingVehicle: 'Завантаження спортивного автомобіля…', loadingPowertrain: 'Завантаження шасі вантажівки…', loadingMaintenance: 'Завантаження автопарку…',
    unavailable: '3D недоступне', restore: 'Оновіть сторінку для відновлення 3D',
  },
};
let language = 'uk';
try { language = localStorage.getItem('motion-lab-language') === 'en' ? 'en' : 'uk'; } catch {}
export function t(key, values = {}) {
  return Object.entries(values).reduce((text, [name, value]) => text.replaceAll(`{${name}}`, value), messages[language][key] || messages.en[key] || key);
}
function applyLanguage() {
  document.documentElement.lang = language;
  for (const element of document.querySelectorAll('[data-i18n]')) element.textContent = t(element.dataset.i18n);
  for (const attribute of ['aria-label', 'title', 'content', 'alt']) {
    for (const element of document.querySelectorAll(`[data-i18n-${attribute}]`)) element.setAttribute(attribute, t(element.getAttribute(`data-i18n-${attribute}`)));
  }
  for (const button of document.querySelectorAll('[data-language]')) button.setAttribute('aria-pressed', String(button.dataset.language === language));
  document.dispatchEvent(new Event('languagechange'));
}
for (const button of document.querySelectorAll('[data-language]')) button.addEventListener('click', () => {
  language = button.dataset.language;
  try { localStorage.setItem('motion-lab-language', language); } catch {}
  applyLanguage();
});
applyLanguage();
