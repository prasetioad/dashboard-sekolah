import { id } from "date-fns/locale";

const registerData ={
    academic_year :'2015/2016',
    prospective_student : {
        student_fullname : 'Rudi Habibi',
        student_date_of_birth: '12312123123 (timestamp)',
        student_place_of_birth: '34123123123 (timestamp)',
        student_gender : 'Boy',
        student_phone_number : '089232412312 (string)',
        student_address:'jln smkmakmsd string'
    },
    parent_of_guardian_information :[
        {   
            id:1,
            parent_guradian : 'Father',
            guardian_fullname:'Manunggal Habibi',
            guardian_date_of_birth:'18/01/1990',
            guardian_place_of_birth: 'Lokwomawe',
            guardian_gender:'Man',
            guardian_phone_number: '0891263123',
            guardian_address:'Jl. Prof. DR. Soepomo No.143 blok J, Tebet Bar., Kec. Tebet Kota Jakarta Selatan Daerah Khusus Ibukota Jakarta'
        },
        {
            id:2,
            parent_guradian : 'Mother',
            guardian_fullname:'Sulastrih Habibi',
            guardian_date_of_birth:'09/09/1991',
            guardian_place_of_birth: 'Lokwomawe',
            guardian_gender:'Man',
            guardian_phone_number: '0891263123',
            guardian_address:'Jl. Prof. DR. Soepomo No.143 blok J, Tebet Bar., Kec. Tebet Kota Jakarta Selatan Daerah Khusus Ibukota Jakarta'
        }
    ],
    educational_background:[
        {
            id:1,
            school_name:'SMPK BPK PENABUR B',
            school_city_regency:'Banda Lamongan',
            graduation_year:'2015',
            report_card_and_diploma:{
                lastModified: 1746333152190,
                lastModifiedDate : 'Sun May 04 2025 11: 32: 32 GMT +0700(Western Indonesia Time)',
                name:"Frame 311.png",
                size: 1118,
                type:"image/png",
                webkitRelativePath:""
            }
        },
    ],
    upload_transfer_receipt : {
        lastModified: 1746333152190,
        lastModifiedDate : 'Sun May 04 2025 11: 32: 32 GMT +0700(Western Indonesia Time)',
        name:"Frame 311.png",
        size: 1118,
        type:"image/png",
        webkitRelativePath:""
    }
}

export default registerData