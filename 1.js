function myBiodata(name, age){
	var fullBiodata = {"address":"Jl.Industri Kapal Dalam No.14 RT.006 RW.011 Tugu Cimanggis Depok Kode Pos 16451", "hobbies":[
		"Reading", "Gaming", "Coding", "Filosofi"],"is_married": false, "list_schools":[
			{"name":"Sekolah Dasar Negeri Tugu 11 Depok", "year_in":"2003", "year_out":"2009","major":null},
			{"name":"MTS Nasyatul Khair Depok","year_in":"2009","year_out":"2012","major":null},
			{"name":"SMK Amaliyah Jakarta Selatan","year_in":"2012","year_out":"2015","major":"Akuntansi"}
		],
		"skills":[
			{"skill_name":"HTML","level":"Advanced"},
			{"skill_name":"CSS","level":"Advanced"},
			{"skill_name":"JS","level":"Advanced"},
			{"skill_name":"PHP","level":"Advanced"},
			{"skill_name":"Python","level":"Advanced"},
			{"skill_name":"Java","level":"Beginner"},
			{"skill_name":"jQuery","level":"Beginner"},
			{"skill_name":"Swift","level":"Beginner"},
			{"skill_name":"C","level":"Beginner"},
			{"skill_name":"SQL","level":"Beginner"},
			{"skill_name":"C++","level":"Beginner"}
		],
		"interest_in_coding":true
	};
	convert_json = JSON.stringify(fullBiodata);
	return console.log(JSON.stringify(name), JSON.stringify(age), convert_json);
}
myBiodata({"name":"Hary Agustian"},{"age":22});
