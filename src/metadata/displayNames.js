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
  'eoc_activation_process_20200515_final.pptx':
    'Module 4 Guidance - EOC Activation: COVID-19 Considerations',
  'operate-5-2020-eoc-covid-19-operations-guide.pptx':
    'Module 5 Guidance - Operating an EOC: COVID-19 Considerations',
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
  '04_doc_eoc_activation_and_transition_criteria_es-sa_TextMaster_TR-312-38138-es.docx':
    'EOC Activation and Transition Criteria - Spanish',
  '05_doc_planning_process_es-sa_TextMaster_TR-312-38138-es.doc':
    'The Incident Action Planning Process - Spanish',
  '05_tool_ics_form_201_incident_briefing_es-sa_TextMaster_TR-312-77714-es.doc':
    'ICS Form 201: Incident Briefing - Spanish',
  '05_tool_ics_form_202_incident_objectives_es-sa_TextMaster_TR-312-77714-es.doc':
    'ICS Form 202: Incident Objectives - Spanish',
  '06_doc_eoc_deactivation_es-sa_TextMaster_TR-312-38138-es.docx':
    'EOC Deactivation - Spanish',
  '1-2013-moh-thira-theat-hazard-identification-risk-assessment-guide_es-sa_TextMaster_TR-312-38138-es.docx':
    'THIRA Guide for MOHs - Spanish',
  '1-2020-what-is-an-EOC_es__1__1__1_es-sa_TextMaster_TR-312-77714-es.pptx':
    'Module 1 Guidance - Using an EOC to Support COVID-19 Response - Spanish',
  '2-2020-organize-ims-for-public-health-overview_es-sa_TextMaster_TR-312-77714-es.pptx':
    'Module 2 Guidance - Introduction to Incident Management Systems (IMS) - Spanish',
  '3-2020-eoc-design-checklist_es-sa_TextMaster_TR-312-38138-es.docx':
    'Module 2 Guidance - Introduction to Incident Management Systems (IMS) - Spanish',
  '3-2020-eoc-equipment-supplies-checklist_es-sa_TextMaster_TR-312-38138-es.docx':
    'EOC Equipment and Supply Considerations - Spanish',
  '3-eoc-design-and-equipment-considerations-final_es-sa_TextMaster_TR-312-77714-es.pptx':
    'Module 3 Guidance - EOC Design and Equipment Considerations - Spanish',
  '4-eoc_activation_process_20200515_final_es-sa_TextMaster_TR-312-77714-es.pptx':
    'Module 4 Guidance - EOC Activation: COVID-19 Considerations - Spanish',
  '5-operate-5-2020-eoc-covid-19-operations-guide_es-sa_TextMaster_TR-312-77714-es.pptx':
    'Module 5 Guidance - Operating an EOC: COVID-19 Considerations - Spanish',
  '6-ppt_eoc_deactivation_process_20200522_FINAL_es-sa_TextMaster_TR-312-77714-es.pptx':
    'Module 6 Guidance - Deactivating an EOC: COVID-19 Considerations - Spanish',
  '7-prepare-7-2020-eoc-preparedness-planning-training-aar_es-sa_TextMaster_TR-312-77714-es.pptx':
    'Module 7 Guidance - EOC Preparedness, Mitigation and Recovery: COVID-19 Considerations - Spanish',
}

export default displayNames
