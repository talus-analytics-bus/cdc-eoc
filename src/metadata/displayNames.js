const displayNames = {
  '02_doc_us_incident_command_system.doc': 'NIMS - The Incident Command System',
  '07_tool_case_study_facilitator_guide.pdf':
    "Instructor's Guide for Facilitating Classroom Epidemiologic Case Studies",
  '07_tool_how_to_write_a_good_case_study.pdf':
    'How to Write an Epidemiologic Case Study',
  '06_doc_eoc_deactivation.docx': 'EOC Deactivation ',
  '05_doc_disease_control_after_disasters_2006.docx':
    'Communicable diseases following natural disasters: Risk assessment and priority interventions',
  '05_doc_public_health_comms_handbook_2015.docx':
    'Effective communications: Communications Training for WHO Staff',
  '05_tool_ics_form_202_incident_objectives.doc':
    'ICS Form 202: Incident Objectives',
  '05_tool_ics_form_201_incident_briefing.doc':
    'ICS Form 201: Incident Briefing',
  '04_doc_eoc_activation_and_transition_criteria.docx':
    'EOC Activation and Transition Criteria',
  '3-2020-eoc-equipment-supplies-checklist.docx':
    'EOC Equipment and Supply Considerations',
  '1-2011-comisca-country-emergency-preparedness-assessment.pdf':
    'COMISCA Country Emergency Preparedness Assessment',
  '3-2020-eoc-design-checklist.docx': 'EOC Design Considerations Checklist',
  '3-2020-eoc-design-workbook.docx': 'EOC Design Workbook',
  '07_tool_how_to_do_a_pan_flu_ttx.doc':
    'Tabletop Exercises for Pandemic Influenza Preparedness in Local Public Health Agencies',
  '2-who-2020-ims-structure-for-health.pdf':
    "WHO's IMS Organizational Structure",
  '3-nsw-australia-2013-eoc-layout-and-supplies-plan.pdf':
    'NSW Australia Government EOC Policy Document',
  '05_doc_planning_process.doc': 'The Incident Action Planning Process',
  'WHO PHEOC Handbook for Training and Exercises.pdf':
    'WHO PHEOC Handbook for Training and Exercises',
  '05_doc_mira_final_version_2012.pdf':
    'Multi-Cluster/ Sector Initial Rapid Assessment (MIRA)',
  '1-who-2018-pheoc-planning-handbook.pdf': 'Handbook for Developing a PHEOC',
  '05_tool_ops_guidance_finalversion_2012.pdf':
    'Operational Guidance for Coordinated Assessments in Humanitarian Crises',
  '07_tool_public_health_emergency_exercise_toolkit.pdf':
    'Public Health Emergency Exercise Toolkit',
  '1-2013-moh-thira-theat-hazard-identification-risk-assessment-guide.docx':
    'THIRA Guide for MOHs',
  '07_tool_paho_simulations_guide.pdf':
    'Guidelines for Developing Emergency Simulations and Drills',
  'prepare-7-2020-eoc-preparedness-planning-training-aar.pptx':
    'Module 7 Guidance - EOC Preparedness, Mitigation and Recovery: COVID-19 Considerations',
  'ppt_eoc_deactivation_process_20200522_FINAL.pptx':
    'Module 6 Guidance - Deactivating an EOC: COVID-19 Considerations',
  '6-ppt_FR_COU_desactivation_20200522_FINAL.pptx':
    'Deactivating an EOC: COVID-19 Considerations - French',
  'eoc_activation_process_20200515_final.pptx':
    'Module 4 Guidance - EOC Activation: COVID-19 Considerations',
  '4-activation_COU_processus_FR.pptx':
    'EOC Activation: COVID-19 Considerations - French',
  '4_eoc_activation_process_20200515_final_RU.pptx':
    'EOC Activation: COVID-19 Considerations - Russian',
  'operate-5-2020-eoc-covid-19-operations-guide.pptx':
    'Module 5 Guidance - Operating an EOC: COVID-19 Considerations',
  "5-fonctionnement d'un COU_FR.pptx":
    'Operating an EOC: COVID-19 Considerations - French',
  '1-2020-what-is-an-EOC.pptx':
    'Module 1 Guidance - Using an EOC to Support COVID-19 Response',
  '05_IFRC_Guidelines for Assessment in Emergencies_2008.pdf':
    'Guidelines for Assessment in Emergencies',
  '2-2020-organize-ims-for-public-health-overview.pptx':
    'Module 2 Guidance - Introduction to Incident Management Systems (IMS)',
  'eoc-design-and-equipment-considerations-final.pptx':
    'Module 3 Guidance - EOC Design and Equipment Considerations',
  'WHO PHEOC Partial Checklist_Operations_EN.pdf':
    'WHO PHEOC Partial Checklist - Operations - English',
  '3-who-2015-pheoc-checklist-for-design-and-equipment-en.pdf':
    'WHO PHEOC Partial Checklist - Design and Equipment - English',
  'WHO PHEOC Partial Checklist_Preparedness Cycle_EN.pdf':
    'WHO PHEOC Partial Checklist - Preparedness - English',
  'WHO PHEOC Partial Checklist_Preparedness Cycle_ES.pdf':
    'WHO PHEOC Partial Checklist - Preparedness - Spanish',
  'WHO PHEOC Partial Checklist_Preparedness Cycle_RU.pdf':
    'WHO PHEOC Partial Checklist - Preparedness - Russian',
  'WHO PHEOC Partial Checklist_Operations_ES.pdf':
    'WHO PHEOC Partial Checklist - Operations - Spanish',
  'WHO PHEOC Partial Checklist_Operations_RU.pdf':
    'WHO PHEOC Partial Checklist - Operations - Russian',
  'WHO PHEOC Partial Checklist_Operations_FR.pdf':
    'WHO PHEOC Partial Checklist - Operations - French',
  '3-who-2015-pheoc-checklist-for-design-and-equipment-es.pdf':
    'WHO PHEOC Partial Checklist - Design and Equipment - Spanish',
  '3-who-2015-pheoc-checklist-for-design-and-equipment-fr.pdf':
    'WHO PHEOC Partial Checklist - Design and Equipment - French',
  '1-who-2015-pheoc-checklist-for-legal-and-policy-es.pdf':
    'WHO PHEOC Partial Checklist - Legal and Policy - Spanish',
  '1-who-2015-pheoc-checklist-for-legal-and-policy-fr.pdf':
    'WHO PHEOC Partial Checklist - Legal and Policy - French',
  '1-who-2015-pheoc-checklist-for-legal-and-policy-ru.pdf':
    'WHO PHEOC Partial Checklist - Legal and Policy - Russian',
  '1-who-2015-pheoc-full-checklist-es.pdf':
    'WHO PHEOC Full Checklist - Spanish',
  '1-who-2015-pheoc-full-checklist-fr.pdf': 'WHO PHEOC Full Checklist - French',
  '1-who-2015-pheoc-full-checklist-en.pdf':
    'WHO PHEOC Full Checklist - English',
  '1-who-2015-pheoc-checklist-for-legal-and-policy-en.pdf':
    'WHO PHEOC Partial Checklist - Legal and Policy - English',
  '1-who-2015-pheoc-full-checklist-ru.pdf':
    'WHO PHEOC Full Checklist - Russian',
  'WHO PHEOC Partial Checklist_Operations_AR.pdf':
    'WHO PHEOC Partial Checklist - Operations - Arabic',
  '1-who-2015-pheoc-checklist-for-legal-and-policy-ar.pdf':
    'WHO PHEOC Partial Checklist - Legal and Policy - Arabic',
  '1-who-2015-pheoc-full-checklist-ar.pdf': 'WHO PHEOC Full Checklist - Arabic',
  'WHO PHEOC Partial Checklist_Preparedness Cycle_FR.pdf':
    'WHO PHEOC Partial Checklist - Preparedness - French',
  '3-who-2015-pheoc-checklist-for-design-and-equipment-ar.pdf':
    'WHO PHEOC Partial Checklist - Design and Equipment - Arabic',
  '3-who-2015-pheoc-checklist-for-design-and-equipment-ru.pdf':
    'WHO PHEOC Partial Checklist - Design and Equipment - Russian',
  'WHO PHEOC Partial Checklist_Preparedness Cycle_AR.pdf':
    'WHO PHEOC Partial Checklist - Preparedness - Arabic',
  'WHO PHEOC Partial Checklist_Operations_CH.pdf':
    'WHO PHEOC Partial Checklist - Operations - Chinese',
  '3-who-2015-pheoc-checklist-for-design-and-equipment-ch.pdf':
    'WHO PHEOC Partial Checklist - Design and Equipment - Chinese',
  '1-who-2015-pheoc-checklist-for-legal-and-policy-ch.pdf':
    'WHO PHEOC Partial Checklist - Legal and Policy - Chinese',
  '1-who-2015-pheoc-full-checklist-ch.pdf':
    'WHO PHEOC Full Checklist - Chinese',
  'WHO PHEOC Partial Checklist_Preparedness Cycle_CH.pdf':
    'WHO PHEOC Partial Checklist - Preparedness - Chinese',
  '1-who-2015-pheoc-framework-es.pdf': 'WHO PHEOC Framework - Spanish',
  '1-who-2015-pheoc-framework-en.pdf': 'WHO PHEOC Framework - English',
  '1-who-2015-pheoc-framework-ar.pdf': 'WHO PHEOC Framework - Arabic',
  '1-who-2015-pheoc-framework-ch.pdf': 'WHO PHEOC Framework - Chinese',
  '1-who-2015-pheoc-framework-fr.pdf': 'WHO PHEOC Framework - French',
  '1-who-2015-pheoc-framework-ru.pdf': 'WHO PHEOC Framework - Russian',
  '2-who-2015-pheoc-checklist-for-organization-ims-es.pdf':
    'WHO PHEOC Partial Checklist - Organization - Spanish',
  '2-who-2015-pheoc-checklist-for-organization-ims-ru.pdf':
    'WHO PHEOC Partial Checklist - Organization - Russian',
  '2-who-2015-pheoc-checklist-for-organization-ims-en.pdf':
    'WHO PHEOC Partial Checklist - Organization - English',
  '2-who-2015-pheoc-checklist-for-organization-ims-fr.pdf':
    'WHO PHEOC Partial Checklist - Organization - French',
  '2-who-2015-pheoc-checklist-for-organization-ims-ar.pdf':
    'WHO PHEOC Partial Checklist - Organization - Arabic',
  '2-who-2015-pheoc-checklist-for-organization-ims-ch.pdf':
    'WHO PHEOC Partial Checklist - Organization - Chinese',
  'WHO Guidance for After Action Review_FR.pdf':
    'WHO After Action Review - French',
  'WHO Guidance for After Action Review_EN.pdf':
    'WHO After Action Review - English',
  'WHO Guidance for After Action Review_RU.pdf':
    'WHO After Action Review - Russian',
  '01-2013-GUÍA_THIRA_ministerio-de-salud_es-sa.docx':
    'Guía THIRA para ministerios de salud',
  '01-2020-Qué-es-un-COE_es__1__1__1_es-sa.pptx':
    'Módulo 1 Guía: Usando un Centro de Operaciones en Emergencia (COE) para apoyar la respuesta a la COVID-19',
  '1-2020-Qu_est-ce que c_est qu_un COU__1__FR.pptx':
    'Using an EOC to Support COVID-19 Response - French',
  '02-2020-Presentación-del-Sistema-de-Gestión-de-Incidentes-SGI_es-sa.pptx':
    'Módulo 2 Guía: Introdución al Sistema de Gestíon de Incidentes',
  '03-2020-eoc-Consideraciones-para-los-equipos_es-sa.docx':
    'Consideraciones para el equipamiento',
  '03-2020-eoc-lista-de-verificación-de-diseño_es-sa.docx':
    'Lista de verificación de diseño',
  '03-Diseño-del-COE-y-consideraciones-de-equipamiento_es-sa.pptx':
    'Módulo 3 Guía: Diseño y consideraciones de equipar un COE',
  '04-Activación-del-COE_es-sa.pptx':
    'Módulo 4 Guía: Processo de activación del COE: Consideraciones para COVID-19',
  '04_doc_criterios-de-transición-y-activación-del-COE_es-sa.docx':
    'Criterios de transición y activación',
  '05-Funcionamiento-de-un-COE-COVID19_es-sa.pptx':
    'Módulo 5 Guía: Funcionamiento de un COE',
  '05_doc_PROCESO-DE-PLANIFICACIÓN_es-sa.doc': 'Proceso de planificación',
  '05_herramienta_formulario_ics_201_SESIÓN-INFORMATIVA-SOBRE-EL-INCIDENTE_es-sa.doc':
    'Formulario ICS 201: Sesión informativa sobre el incidente',
  '05_herramienta_formulario_ics_202_OBJECTIVOS-DEL-INCIDENTE_es-sa.doc':
    'Formulario ICS 202: Objectivos del incidente',
  '06-ppt_processo_desactivación-del-COE_es-sa.pptx':
    'Módulo 6 Guía: Processo desactivación del COE: Consideraciones para COVID-19',
  '06_doc_Desactivación-del-COE_es-sa.docx': 'Desactivación del COE',
  '07-Preparación-en-el-COE_es-sa.pptx': 'Módulo 7 Guía: Preparación en el COE',
  '2020-gestión-de-emergencias-de-salud-pública-y-el-COE_ES.vtt':
    'Gestión de emergencias de salud pública y el COE',
  '8 - Intra-action review overview.pptx':
    'Module 8 Guidance - Intra-action review overview',
  'IAR Review_Houser.pdf': 'IAR Review Houser',
  'WHO-2019-nCoV-Country-IAR-add.1-2021.1-eng.pdf':
    'WHO Guidance for Conducting a Country IAR Addendum 1 - English',
  'WHO-2019-nCoV-Country-IAR-forms-feedback-2021.1-eng.docx':
    'WHO Country COVID-19 IAR Participant feedback form 2021 - English',
  'WHO-2019-nCoV-Country-IAR-forms-feedback-summary-2021.1-eng.xlsx':
    'WHO Country COVID-19 IAR Participant Feedback Summary 2021 - English',
  'WHO-2019-nCoV-Country-IAR-manual-facilitator-2021.1-eng.docx':
    'WHO COVID-19 IAR Facilitator Manual 2021 - English',
  'WHO-2019-nCoV-Country-IAR-online-review-2021.1-eng.pdf':
    'WHO COVID-19 IAR Onsite Review 2021 - English',
  'WHO-2019-nCoV-Country-IAR-onsite-review-2021.1-eng.pdf':
    'WHO Online Review 2021 - English',
  'WHO-2019-nCoV-Country-IAR-templates-agenda-2021.1-eng.docx':
    'WHO COVID-19 IAR Tentative Agenda - English',
  'WHO-2019-nCoV-Country-IAR-templates-concept-note-2021.1-eng.docx':
    'WHO COVID-19 IAR Concept Note 2021 - English',
  'WHO-2019-nCoV-Country-IAR-templates-note-taking-2021.1-eng.docx':
    'WHO COVID-19 IAR Note Taking Template 2021 - English',
  'WHO-2019-nCoV-Country-IAR-templates-note-taking-vaccination-2021.1-eng.docx':
    'WHO COVID-19 IAR Note Taking Template Vaccination - English',
  'WHO-2019-nCoV-Country-IAR-templates-presentation-2021.1-eng.pptx':
    'WHO COVID-19 IAR Presentation Template 2021 - English',
  'WHO-2019-nCoV-Country-IAR-templates-report-2021.1-eng.docx':
    'WHO COVID-19 IAR Final Report Template 2021 - English',
  'WHO-2019-nCoV-Country-IAR-templates-report-vaccination-2021.1-eng.docx':
    'WHO COVID-19 IAR Final Report Template Vaccination - English',
  'WHO-2019-nCoV-Country-IAR-templates-success-stories-2021.1-eng.docx':
    'WHO COVID-19 IAR Exemplar Story Template 2021 - English',
  'WHO-2019-nCoV-Country-IAR-templates-trigger-questions-2021.1-eng.xlsx':
    'WHO COVID-19 IAR Trigger Questions Database 2021 - English',
  'WHO-2019-nCoV-Country_IAR-2020.1-ara.pdf':
    'WHO Guidance for Conducting A Country COVID-19 Intra-Action Review 2020 - Arabic',
  'WHO-2019-nCoV-Country_IAR-2020.1-chi.pdf':
    'WHO Guidance for Conducting A Country COVID-19 Intra-Action Review 2020 - Chinese',
  'WHO-2019-nCoV-Country_IAR-2020.1-eng.pdf':
    'WHO Guidance for Conducting A Country COVID-19 Intra-Action Review 2020 - English',
  'WHO-2019-nCoV-Country_IAR-2020.1-fre (1).pdf':
    'WHO Guidance for Conducting A Country COVID-19 Intra-Action Review 2020 - French',
  'WHO-2019-nCoV-Country_IAR-2020.1-spa.pdf':
    'WHO Guidance for Conducting A Country COVID-19 Intra-Action Review 2020 - Spanish',
  'WHO-2019-nCoV-Country-IAR-2020.1-rus.pdf':
    'WHO Guidance for Conducting A Country COVID-19 Intra-Action Review 2020 - Russian',
  'WHO-2019-nCoV-Country_IAR-forms-feedback-2020.1-ara.docx':
    'WHO Country COVID-19 IAR Participant Feedback Form 2020 - Arabic',
  'WHO-2019-nCoV-Country_IAR-forms-feedback-2020.1-chi.docx':
    'WHO Country COVID-19 IAR Participant Feedback Form 2020 - Chinese',
  'WHO-2019-nCoV-Country_IAR-forms-feedback-2020.1-fre.docx':
    'WHO Country COVID-19 IAR Participant Feedback Form 2020 - French',
  'WHO-2019-nCoV-Country_IAR-forms-feedback-2020.1-rus.docx':
    'WHO Country COVID-19 IAR Participant Feedback Form 2020 - Russian',
  'WHO-2019-nCoV-Country_IAR-forms-feedback-2020.1-spa.docx':
    'WHO Country COVID-19 IAR Participant Feedback Form 2020 - Spanish',
  'WHO-2019-nCoV-Country_IAR-forms-feedback_summary-2020.1-ara.xlsx':
    'WHO Country COVID-19 IAR Participant Feedback Summary 2020 - Arabic',
  'WHO-2019-nCoV-Country_IAR-forms-feedback_summary-2020.1-chi.xlsx':
    'WHO Country COVID-19 IAR Participant Feedback Summary 2020 - Chinese',
  'WHO-2019-nCoV-Country_IAR-forms-feedback_summary-2020.1-fre.xlsx':
    'WHO Country COVID-19 IAR Participant Feedback Summary 2020 - French',
  'WHO-2019-nCoV-Country_IAR-forms-feedback_summary-2020.1-rus.xlsx':
    'WHO Country COVID-19 IAR Participant Feedback Summary 2020 - Russian',
  'WHO-2019-nCoV-Country_IAR-forms-feedback_summary-2020.1-spa.xlsx':
    'WHO Country COVID-19 IAR Participant Feedback Summary 2020 - Spanish',
  'WHO-2019-nCoV-Country_IAR-manual_facilitator-2020.1-ara.docx':
    'WHO COVID-19 IAR Facilitator Manual 2020 - Arabic',
  'WHO-2019-nCoV-Country_IAR-manual_facilitator-2020.1-chi.docx':
    'WHO COVID-19 IAR Facilitator Manual 2020 - Chinese',
  'WHO-2019-nCoV-Country_IAR-manual_facilitator-2020.1-fre.docx':
    'WHO COVID-19 IAR Facilitator Manual 2020 - French',
  'WHO-2019-nCoV-Country_IAR-manual_facilitator-2020.1-rus.docx':
    'WHO COVID-19 IAR Facilitator Manual 2020 - Russian',
  'WHO-2019-nCoV-Country_IAR-manual_facilitator-2020.1-spa.docx':
    'WHO COVID-19 IAR Facilitator Manual 2020 - Spanish',
  'WHO-2019-nCoV-Country_IAR-templates-agenda-2020.1-ara.docx':
    'WHO COVID-19 IAR Tentative Agenda 2020 - Arabic',
  'WHO-2019-nCoV-Country_IAR-templates-agenda-2020.1-chi.docx':
    'WHO COVID-19 IAR Tentative Agenda 2020 - Chinese',
  'WHO-2019-nCoV-Country_IAR-templates-agenda-2020.1-fre.docx':
    'WHO COVID-19 IAR Tentative Agenda 2020 - French',
  'WHO-2019-nCoV-Country_IAR-templates-agenda-2020.1-rus.docx':
    'WHO COVID-19 IAR Tentative Agenda 2020 - Russian',
  'WHO-2019-nCoV-Country_IAR-templates-agenda-2020.1-spa.docx':
    'WHO COVID-19 IAR Tentative Agenda 2020 - Spanish',
  'WHO-2019-nCoV-Country_IAR-templates-concept_note-2020.1-ara.docx':
    'WHO COVID-19 IAR Concept Note 2020 - Arabic',
  'WHO-2019-nCoV-Country_IAR-templates-concept_note-2020.1-chi.docx':
    'WHO COVID-19 IAR Concept Note 2020 - Chinese',
  'WHO-2019-nCoV-Country_IAR-templates-concept_note-2020.1-fre.docx':
    'WHO COVID-19 IAR Concept Note 2020 - French',
  'WHO-2019-nCoV-Country_IAR-templates-concept_note-2020.1-rus.docx':
    'WHO COVID-19 IAR Concept Note 2020 - Russian',
  'WHO-2019-nCoV-Country_IAR-templates-concept_note-2020.1-spa.docx':
    'WHO COVID-19 IAR Concept Note 2020 - Spanish',
  'WHO-2019-nCoV-Country_IAR-templates-note_taking-2020.1-ara.docx':
    'WHO COVID-19 IAR Note Taking Template 2020 - Arabic',
  'WHO-2019-nCoV-Country_IAR-templates-note_taking-2020.1-chi.docx':
    'WHO COVID-19 IAR Note Taking Template 2020 - Chinese',
  'WHO-2019-nCoV-Country_IAR-templates-note_taking-2020.1-fre.docx':
    'WHO COVID-19 IAR Note Taking Template 2020 - French',
  'WHO-2019-nCoV-Country_IAR-templates-note_taking-2020.1-rus.docx':
    'WHO COVID-19 IAR Note Taking Template 2020 - Russian',
  'WHO-2019-nCoV-Country_IAR-templates-note_taking-2020.1-spa.docx':
    'WHO COVID-19 IAR Note Taking Template 2020 - Spanish',
  'WHO-2019-nCoV-Country_IAR-templates-presentation-2020.1-ara.pptx':
    'WHO COVID-19 IAR Presentation Template 2020 - Arabic',
  'WHO-2019-nCoV-Country_IAR-templates-presentation-2020.1-chi.pptx':
    'WHO COVID-19 IAR Presentation Template 2020 - Chinese',
  'WHO-2019-nCoV-Country_IAR-templates-presentation-2020.1-fre.pptx':
    'WHO COVID-19 IAR Presentation Template 2020 - French',
  'WHO-2019-nCoV-Country_IAR-templates-presentation-2020.1-rus.pptx':
    'WHO COVID-19 IAR Presentation Template 2020 - Russian',
  'WHO-2019-nCoV-Country_IAR-templates-presentation-2020.1-spa.pptx':
    'WHO COVID-19 IAR Presentation Template 2020 - Spanish',
  'WHO-2019-nCoV-Country_IAR-templates-report-2020.1-ara.docx':
    'WHO COVID-19 IAR Final Report Template 2020 - Arabic',
  'WHO-2019-nCoV-Country_IAR-templates-report-2020.1-chi.docx':
    'WHO COVID-19 IAR Final Report Template 2020 - Chinese',
  'WHO-2019-nCoV-Country_IAR-templates-report-2020.1-fre.docx':
    'WHO COVID-19 IAR Final Report Template 2020 - French',
  'WHO-2019-nCoV-Country_IAR-templates-report-2020.1-spa.docx':
    'WHO COVID-19 IAR Final Report Template 2020 - Spanish',
  'WHO-2019-nCoV-Country_IAR-templates-report2020.1-rus.docx':
    'WHO COVID-19 IAR Final Report Template 2020 - Russian',
  'WHO-2019-nCoV-Country_IAR-templates-success_stories-2020.1-ara.docx':
    'WHO COVID-19 IAR Exemplar Story Template 2020 - Arabic',
  'WHO-2019-nCoV-Country_IAR-templates-success_stories-2020.1-chi.docx':
    'WHO COVID-19 IAR Exemplar Story Template 2020 - Chinese',
  'WHO-2019-nCoV-Country_IAR-templates-success_stories-2020.1-fre.docx':
    'WHO COVID-19 IAR Exemplar Story Template 2020 - French',
  'WHO-2019-nCoV-Country_IAR-templates-success_stories-2020.1-rus.docx':
    'WHO COVID-19 IAR Exemplar Story Template 2020 - Russian',
  'WHO-2019-nCoV-Country_IAR-templates-success_stories-2020.1-spa.docx':
    'WHO COVID-19 IAR Exemplar Story Template 2020 - Spanish',
  'WHO-2019-nCoV-Country_IAR-templates-trigger_questions-2020.1-ara.xlsx':
    'WHO COVID-19 IAR Trigger Questions Database 2020 - Arabic',
  'WHO-2019-nCoV-Country_IAR-templates-trigger_questions-2020.1-chi.xlsx':
    'WHO COVID-19 IAR Trigger Questions Database 2020 - Chinese',
  'WHO-2019-nCoV-Country_IAR-templates-trigger_questions-2020.1-fre.xlsx':
    'WHO COVID-19 IAR Trigger Questions Database 2020 - French',
  'WHO-2019-nCoV-Country_IAR-templates-trigger_questions-2020.1-rus.xlsx':
    'WHO COVID-19 IAR Trigger Questions Database 2020 - Russian',
  'WHO-2019-nCoV-Country_IAR-templates-trigger_questions-2020.1-spa.xlsx':
    'WHO COVID-19 IAR Trigger Questions Database 2020 - Spanish',
  'COVID-19-vaccination-IAR-(mini-cPIE)-Regional-Webinar-Apr-2021-(for-participants).pdf':
    'Mini-cPIE (COVID-19 vaccination IAR)',
  '842337.pptx': 'WHO COVID-19 IAR Overview Slide Deck',
  'Module 8 Guidance - Spanish placeholder.ppt':
    'Módulo 8 Guía: Spanish Placeholder',
  'WHO Simulation Exercise Manual - Arabic.pdf':
    'WHO Simulation Exercise Manual - Arabic',
  'WHO Simulation Exercise Manual - Chinese.pdf':
    'WHO Simulation Exercise Manual - Chinese',
  'WHO Simulation Exercise Manual - French.pdf':
    'WHO Simulation Exercise Manual - French',
  'WHO Simulation Exercise Manual - Russian.pdf':
    'WHO Simulation Exercise Manual - Russian',
  'WHO Simulation Exercise Manual .pdf':
    'WHO Simulation Exercise Manual English',
  'Effective Communications- Communications Training For WHO Staff - Arabic.pdf':
    'Communications Training For WHO Staff - Arabic',
  'Effective Communications- Communications Training For WHO Staff - Chinese.pdf':
    'Communications Training For WHO Staff - Chinese',
  'Effective Communications- Communications Training For WHO Staff - English.pdf':
    'Communications Training For WHO Staff - English',
  'Effective Communications- Communications Training For WHO Staff - French.pdf':
    'Communications Training For WHO Staff - French',
  'Effective Communications- Communications Training For WHO Staff - Russian.pdf':
    'Communications Training For WHO Staff - Russian',
  'Effective Communications- Communications Training For WHO Staff - Spanish.pdf':
    'Communications Training For WHO Staff - Spanish',
  'Multi-Sector Initial Rapid Assessment Guidance Revision July 2015.pdf':
    'Multi-Sector Initial Rapid Assessment Guidance Revision July 2015',
  'Public Health Emergency Operations Center (PHEOC) Legal Framework Guide.pdf':
    'PHEOC Legal Framework Guide',
}

export default displayNames
