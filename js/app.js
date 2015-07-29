// gender	client_group	provider	account_setup_access_yn	application_y_n	appointment_y_n	ivr_promoted_y_n	update_information_y_n	view_information_y_n	voice_registration_y_n	time_spent	reason_for_time_spent	previous_contact	note_date	note_time	age	ethnicity	benefit	benefit_sub_category	employee_name	csr_usercode	jss_service	note_type

var _data;
var gender, gender_group, gender_chart;
var client_group, client_group_group, client_group_chart;
var provider, provider_group, provider_chart;
var account_setup_access_yn, account_setup_access_yn_group, account_setup_access_yn_chart;
var application_y_n, application_y_n_group, application_y_n_chart;
var appointment_y_n, appointment_y_n_group, appointment_y_n_chart;
var ivr_promoted_y_n, ivr_promoted_y_n_group, ivr_promoted_y_n_chart;
var update_information_y_n, update_information_y_n_group, update_information_y_n_chart;
var view_information_y_n, view_information_y_n_group, view_information_y_n_chart;
var voice_registration_y_n, voice_registration_y_n_group, voice_registration_y_n_chart;
var time_spent, time_spent_group, time_spent_chart;
var reason_for_time_spent, reason_for_time_spent_group, reason_for_time_spent_chart;
var previous_contact, previous_contact_group, previous_contact_chart;
var note_date, note_date_group, note_date_chart;
var note_time, note_time_group, note_time_chart;
var age, age_group, age_chart;
var ethnicity, ethnicity_group, ethnicity_chart;
var benefit, benefit_group, benefit_chart;
var benefit_sub_category, benefit_sub_category_group, benefit_sub_category_chart;
var employee_name, employee_name_group, employee_name_chart;
var csr_usercode, csr_usercode_group, csr_usercode_chart;
var jss_service, jss_service_group, jss_service_chart;
var note_type, note_type_group, note_type_chart;

function dim_zero_rows(chart) {
  chart.selectAll('text.row').classed('dim',function(d){return (d.value < 0.1)});
}

function cleanup(d) {
//  console.log(d);
}

d3.tsv("data/msd.tsv", function(data) {
  _data = data;
  
  for (i in data) {
    cleanup(data[i]);
  }
  
  ndx = crossfilter(data);
  
  gender = ndx.dimension(function(d) { return d.gender});
  gender_group = gender.group().reduceCount();
  gender_chart = dc.pieChart('#gender')
    .innerRadius(50)
    .radius(80)
    .dimension(gender)
    .group(gender_group)
    .transitionDuration(200)
    .height(200)
  

  client_group = ndx.dimension(function(d) { return d.client_group});
  client_group_group = client_group.group().reduceCount();
  client_group_chart = dc.pieChart('#client_group')
    .innerRadius(50)
    .radius(80)
    .dimension(client_group)
    .group(client_group_group)
    .transitionDuration(200)
    .height(200)



  account_setup_access_yn = ndx.dimension(function(d) { return d.account_setup_access_yn});
  account_setup_access_yn_group = account_setup_access_yn.group().reduceCount();
  account_setup_access_yn_chart = dc.pieChart('#account_setup_access_yn')
    .innerRadius(50)
    .radius(80)
    .dimension(account_setup_access_yn)
    .group(account_setup_access_yn_group)
    .transitionDuration(200)
    .height(200)


  application_y_n = ndx.dimension(function(d) { return d.application_y_n});
  application_y_n_group = application_y_n.group().reduceCount();
  application_y_n_chart = dc.pieChart('#application_y_n')
    .innerRadius(50)
    .radius(80)
    .dimension(application_y_n)
    .group(application_y_n_group)
    .transitionDuration(200)
    .height(200)


  appointment_y_n = ndx.dimension(function(d) { return d.appointment_y_n});
  appointment_y_n_group = appointment_y_n.group().reduceCount();
  appointment_y_n_chart = dc.pieChart('#appointment_y_n')
    .innerRadius(50)
    .radius(80)
    .dimension(appointment_y_n)
    .group(appointment_y_n_group)
    .transitionDuration(200)
    .height(200)


  ivr_promoted_y_n = ndx.dimension(function(d) { return d.ivr_promoted_y_n});
  ivr_promoted_y_n_group = ivr_promoted_y_n.group().reduceCount();
  ivr_promoted_y_n_chart = dc.pieChart('#ivr_promoted_y_n')
    .innerRadius(50)
    .radius(80)
    .dimension(ivr_promoted_y_n)
    .group(ivr_promoted_y_n_group)
    .transitionDuration(200)
    .height(200)


  update_information_y_n = ndx.dimension(function(d) { return d.update_information_y_n});
  update_information_y_n_group = update_information_y_n.group().reduceCount();
  update_information_y_n_chart = dc.pieChart('#update_information_y_n')
    .innerRadius(50)
    .radius(80)
    .dimension(update_information_y_n)
    .group(update_information_y_n_group)
    .transitionDuration(200)
    .height(200)


  view_information_y_n = ndx.dimension(function(d) { return d.view_information_y_n});
  view_information_y_n_group = view_information_y_n.group().reduceCount();
  view_information_y_n_chart = dc.pieChart('#view_information_y_n')
    .innerRadius(50)
    .radius(80)
    .dimension(view_information_y_n)
    .group(view_information_y_n_group)
    .transitionDuration(200)
    .height(200)


  voice_registration_y_n = ndx.dimension(function(d) { return d.voice_registration_y_n});
  voice_registration_y_n_group = voice_registration_y_n.group().reduceCount();
  voice_registration_y_n_chart = dc.pieChart('#voice_registration_y_n')
    .innerRadius(50)
    .radius(80)
    .dimension(voice_registration_y_n)
    .group(voice_registration_y_n_group)
    .transitionDuration(200)
    .height(200)

  var re = /[\s-]/; // :space: or -
  time_spent = ndx.dimension(function(d) { return d.time_spent});
  time_spent_group = time_spent.group().reduceCount();
  time_spent_chart = dc.rowChart('#time_spent')
    .dimension(time_spent)
    .group(time_spent_group)
    .transitionDuration(200)
    .height(300)
    .elasticX(true)
    .ordering(function(d) {return +(d.key.split(re)[0])})
  time_spent_chart.xAxis().ticks(4).tickFormat(d3.format('s'));
  time_spent_chart.on('pretransition.dim', dim_zero_rows)

  reason_for_time_spent = ndx.dimension(function(d) { return d.reason_for_time_spent});
  reason_for_time_spent_group = reason_for_time_spent.group().reduceCount();
  reason_for_time_spent_chart = dc.rowChart('#reason_for_time_spent')
    .dimension(reason_for_time_spent)
    .group(reason_for_time_spent_group)
    .transitionDuration(200)
    .height(300)
    .elasticX(true)
    .ordering(function(d){return -d.value})
  reason_for_time_spent_chart.xAxis().ticks(4).tickFormat(d3.format('s'));
  reason_for_time_spent_chart.on('pretransition.dim', dim_zero_rows)


//  note_date = ndx.dimension(function(d) { return d.note_date});
//  note_date_group = note_date.group().reduceCount();
//  note_date_chart = dc.rowChart('#note_date')
//    .dimension(note_date)
//    .group(note_date_group)
//    .transitionDuration(200)
//    .height(300)
//    .cap(10);
//  note_date_chart.xAxis().ticks(4).tickFormat(d3.format('s'));
//
//
//  note_time = ndx.dimension(function(d) { return d.note_time});
//  note_time_group = note_time.group().reduceCount();
//  note_time_chart = dc.rowChart('#note_time')
//    .dimension(note_time)
//    .group(note_time_group)
//    .transitionDuration(200)
//    .height(300)
//    .cap(10);
//  note_time_chart.xAxis().ticks(4).tickFormat(d3.format('s'));
//

//  age = ndx.dimension(function(d) { return d.age});
//  age_group = age.group().reduceCount();
//  age_chart = dc.rowChart('#age')
//    .dimension(age)
//    .group(age_group)
//    .transitionDuration(200)
//    .height(300)
//    .cap(10);
//  age_chart.xAxis().ticks(4).tickFormat(d3.format('s'));


  ethnicity = ndx.dimension(function(d) { return d.ethnicity});
  ethnicity_group = ethnicity.group().reduceCount();
  ethnicity_chart = dc.rowChart('#ethnicity')
    .dimension(ethnicity)
    .group(ethnicity_group)
    .transitionDuration(200)
    .height(300)
    .elasticX(true)
    .ordering(function(d){return -d.value})
  ethnicity_chart.xAxis().ticks(4).tickFormat(d3.format('s'));
  ethnicity_chart.on('pretransition.dim', dim_zero_rows)

  benefit = ndx.dimension(function(d) { return d.benefit});
  benefit_group = benefit.group().reduceCount();
  benefit_chart = dc.rowChart('#benefit')
    .dimension(benefit)
    .group(benefit_group)
    .transitionDuration(200)
    .height(300)
    .elasticX(true)
    .ordering(function(d){return -d.value})
  benefit_chart.xAxis().ticks(4).tickFormat(d3.format('s'));
  benefit_chart.on('pretransition.dim', dim_zero_rows)

  benefit_sub_category = ndx.dimension(function(d) { return d.benefit_sub_category});
  benefit_sub_category_group = benefit_sub_category.group().reduceCount();
  benefit_sub_category_chart = dc.rowChart('#benefit_sub_category')
    .dimension(benefit_sub_category)
    .group(benefit_sub_category_group)
    .transitionDuration(200)
    .height(300)
    .elasticX(true)
    .ordering(function(d){return -d.value})
  benefit_sub_category_chart.xAxis().ticks(4).tickFormat(d3.format('s'));
  benefit_sub_category_chart.on('pretransition.dim', dim_zero_rows)


  employee_name = ndx.dimension(function(d) { return d.employee_name});
  employee_name_group = employee_name.group().reduceCount();
  employee_name_chart = dc.rowChart('#employee_name')
    .dimension(employee_name)
    .group(employee_name_group)
    .transitionDuration(200)
    .height(300)
    .ordering(function(d){return -d.value})
    .elasticX(true)
  employee_name_chart.xAxis().ticks(4).tickFormat(d3.format('s'));
  employee_name_chart.on('pretransition.dim', dim_zero_rows)


  jss_service = ndx.dimension(function(d) { return d.jss_service});
  jss_service_group = jss_service.group().reduceCount();
  jss_service_chart = dc.rowChart('#jss_service')
    .dimension(jss_service)
    .group(jss_service_group)
    .transitionDuration(200)
    .height(300)
    .elasticX(true)
    .ordering(function(d){return -d.value})
  jss_service_chart.xAxis().ticks(4).tickFormat(d3.format('s'));
  jss_service_chart.on('pretransition.dim', dim_zero_rows)
  
  dc.renderAll();
  
  
});