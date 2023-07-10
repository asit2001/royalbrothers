const data = [
  {
    name: "Agra",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/039/original/Agra_new.jpg?1558599458",
  },
  {
    name: "Ahmedabad",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/023/original/Ahmedabad_b8d1eb5783c996a077aff887d35e4168.jpg?1558599488",
  },
  {
    name: "Alleppey",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/022/original/Alleppy_817ae817e23cf6708ce38c850cc42e6d.jpg?1558599504",
  },
  {
    name: " Amritsar",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/101/original/Amritsar.jpg?1568037649",
  },
  {
    name: "Andaman Nicobar",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/017/original/Andaman-_-Nicobar_b5a3ba5c464968f274dfb7a98bcc4dbc.jpg?1558599551",
  },
  {
    name: " Bangalore",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/001/original/Bangalore_1cf1aa53741a94edc3532f7b2b583c52.jpg?1558599565",
  },
  {
    name: " Bangalore Airport",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/051/original/PHOTO-2021-02-01-15-55-27.jpg?1613127422",
  },
  {
    name: " Bangkok",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/028/original/Bankok_efd1b11328e1ac61488cac98a15dc584.jpg?1558599580",
  },
  {
    name: " Belagavi",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/103/original/Belagaum.jpg?1576578730",
  },
  {
    name: " Bhubaneswar",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/097/original/Bhubneswar_1f33e6ba5edf52d880c1bd9f340b80f4.jpg?1558599591",
  },
  {
    name: " Bhuj",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/049/original/Bhuj_abf00061bcecebbbd41e8fc317949439.jpg?1558599605",
  },
  {
    name: "Calicut",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/098/original/Calicut-city-icon.jpg?1567059129",
  },
  {
    name: "Chandigarh",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/024/original/Chandigarh_72374d6c6de8b70d5b4ea5c05c59ba32.jpg?1558599669",
  },
  {
    name: "Chennai",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/018/original/Chennai_e20539d5200238901011bdc1bb2e5a7f.jpg?1558599681",
  },
  {
    name: "Chikmagalur",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/007/original/Chikmagalur_2651596b6f7e5cbf2d2399fe6ca9c7ad.jpg?1558599756",
  },
  {
    name: "Cochin",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/021/original/Cochin_1606932e14a0d0aa3b02afaffeb23157.jpg?1558599768",
  },
  {
    name: "Coimbatore",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/020/original/Coimbatore_0916e4a9a1cbd3a31eaa15b3a54cc7d2.jpg?1558599789",
  },
  {
    name: "Coorg - Kushalnagar",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/025/original/Coorg-Kushalnagar_33007141ac0c1776af600c183815b103.jpg?1558599818",
  },
  {
    name: "Coorg - Madikeri",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/003/original/Coorg-Madikeri_23164519f8e58c8a2676595b5209011d.jpg?1558599831",
  },
  {
    name: "Davanagere",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/104/original/Davangere.jpg?1576578716",
  },
  {
    name: "Delhi",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/034/original/Delhi_21f83b0bf9a5a2c816623238b7628e52.jpg?1558599930",
  },
  {
    name: "Dharamshala",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/043/original/Dharmshala_7a856e0aa3f643752440791c28853737.jpg?1558599942",
  },
  {
    name: "Ganapati pule",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/029/original/Ganpati-pule_3b01c2992789ac8a2dd36cd903163e89.jpg?1558599969",
  },
  {
    name: "Gandhinagar",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/033/original/Gandhinagar_8e02524723e889989ea128e58d7a229f.jpg?1558599954",
  },
  {
    name: "Goa",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/046/original/Goa_2509358334abe698322e4f7523b3356b.jpg?1558599985",
  },
  {
    name: "Guntur",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/096/original/Guntur_a31f793bf22c68fe01479c65dcacd9b7.jpg?1558600001",
  },
  {
    name: "Gurugram",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/040/original/Gurugram_652fd0242a3833bf5b68f9d647a12253.jpg?1558600016",
  },
  {
    name: "Guwahati",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/095/original/Guwahati_3adb5736296c93fec082f24b87dce70d.jpg?1558600028",
  },
  {
    name: "Hubli-Dharwad",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/015/original/Hubli_639135a4da835f48ac30404922b193ec.jpg?1558600089",
  },
  {
    name: "Hyderabad",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/012/original/Hyderabad_e23f5904385e0c21afd0fe4b7ff698fb.jpg?1558600101",
  },
  {
    name: "Indore",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/036/original/Indore_6122bfbe93086a5ae36ab1849b9e458a.jpg?1558600112",
  },
  {
    name: "Jaipur",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/089/original/Jaipur_5d0bb59a74413b8ff68e8e3b0678579b.jpg?1558600131",
  },
  {
    name: "Jaisalmer",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/035/original/Jaisalmer_803980ec3a977dd61c215c5fbefd3909.jpg?1558600142",
  },
  {
    name: "Jodhpur",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/041/original/Jodhpur_43e3b5d3b7a6ecf2b8e33c5d5364f959.jpg?1558600154",
  },
  {
    name: "Kolkata",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/042/original/Kolkata_656fd6c811baa1db3af9c01e0a1c29f8.jpg?1558600283",
  },
  {
    name: "Konark",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/106/original/Konark.jpg?1576578685",
  },
  {
    name: "Lucknow",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/100/original/Lucknow.jpg?1567678107",
  },
  {
    name: "Manali",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/088/original/Manali_db3125c181b228a8b97ace561edff2da.jpg?1558600294",
  },
  {
    name: "Mangalore",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/005/original/Mangalore_bbaef83490a59adabb31955b66e96ece.jpg?1558600312",
  },
  {
    name: "Mohali",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/092/original/Mohali_5245075067b3493799088e81ff562e47.jpg?1558600322",
  },
  {
    name: "Mount Abu",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/048/original/Mount-abu_d53ba3ad1b7d1691c2703206dbfca6cc.jpg?1558600333",
  },
  {
    name: "Mumbai",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/047/original/Mumbai_733c382a5ea084d09053d85a63fb7a94.jpg?1558600349",
  },
  {
    name: "Mysore",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/004/original/Mysore_8633f885a5cd3d96158a131276b2e17d.jpg?1558600381",
  },
  {
    name: "Nashik",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/099/original/Nashik-city-icon.jpg?1567059112",
  },
  {
    name: "Ooty",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/019/original/Ooty_0993dc8d65555073664d2d74d5873ef6.jpg?1558600393",
  },
  {
    name: "Pondicherry",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/013/original/Pondicherry_7dbb9d6cff59c439a046466be6e3d664.jpg?1558600424",
  },
  {
    name: "Pune",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/032/original/Pune_1a59a81f20afd18b33c2127fb9f13f67.jpg?1558600433",
  },
  {
    name: "Puri",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/027/original/Puri_bd4b5d1e9a9e9b07340a108974ab1953.jpg?1558600444",
  },
  {
    name: "Ranchi",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/094/original/Ranchi_fe0b00657315e345c52993f1bf78694b.jpg?1558600513",
  },
  {
    name: "Rishikesh",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/045/original/RIshikesh_b58a0cac50cbbf5d26f92be797eee1f3.jpg?1558600524",
  },
  {
    name: "Sakleshpur",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/016/original/Sakleshpur_3abe9ba47c4a41b1bad62cea4a343b6b.jpg?1558600534",
  },
  {
    name: "Siliguri",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/026/original/Siliguri_8da05b2cd461b2a31deef292bacbf308.jpg?1558600552",
  },
  {
    name: "Srinagar",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/090/original/Srinagar_851409b27523f379ee459eb3144a54fa.jpg?1558600597",
  },
  {
    name: "Surat",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/105/original/Surat.jpg?1576578700",
  },
  {
    name: "Tirupati",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/038/original/Tirupati1.jpg?1576578925",
  },
  {
    name: "Trivandrum",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/010/original/Trivandrum_a97e88c067a5f33f21891be82a1d2e3f.jpg?1558600621",
  },
  {
    name: "Udaipur",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/037/original/Udaipur_cd4a37490dc1fdddac20ecb951cf8b56.jpg?1558600632",
  },
  {
    name: "Udupi - manipal",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/006/original/Udupi-manipal_70cae34b5c765444080986c470b4a4f5.jpg?1558600641",
  },
  {
    name: "Vijayawada",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/009/original/Vijaywada_a37af28439dd8341d51c36fbd2da441d.jpg?1558600667",
  },
  {
    name: " Vizag",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/011/original/Vizag_b8d34a7c3694ce45f4e36b0fea4bc28d.jpg?1558600686",
  },
  {
    name: " Wayanad",
    img: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/091/original/Wayanad_15c7fd5a77bb7e90946c124bbcd9c563.jpg?1558600699",
  },
];
export default data;