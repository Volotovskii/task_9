const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Анна",
            "id_3": "Майя",
            "id_4": "Елена",
            "id_5": "Светлана",
            "id_6": "Татьяна",
            "id_7": "Галина",
            "id_8": "Марина",
            "id_9": "Анастасия",
            "id_10": "Алина"
        }
    }`,

    malePatronymics: `{
        "count": 10,
        "list": { 
            "id_1": "Иванович", 
            "id_2": "Александрович", 
            "id_3": "Дмитриевич", 
            "id_4": "Сергеевич", 
            "id_5": "Алексеевич", 
            "id_6": "Андреевич", 
            "id_7": "Максимович", 
            "id_8": "Николаевич", 
            "id_9": "Антонович", 
            "id_10": "Евгеньевич"
        }
    }`,

    femalePatronymics: `{
        "count": 10,
        "list": {
            "id_1": "Ивановна", 
            "id_2": "Александровна", 
            "id_3": "Дмитриевна", 
            "id_4": "Сергеевна", 
            "id_5": "Алексеевна", 
            "id_6": "Андреевна", 
            "id_7": "Максимовна", 
            "id_8": "Николаевна", 
            "id_9": "Антоновна", 
            "id_10": "Евгеньевна"
        }
    }`,

     maleProfessions: `{
        "count": 10,
        "list": {
            "id_1": "Слесарь", 
            "id_2": "Солдат", 
            "id_3": "Шахтер", 
            "id_4": "Водитель", 
            "id_5": "Программист", 
            "id_6": "Инженер", 
            "id_7": "Строитель", 
            "id_8": "Учитель", 
            "id_9": "Врач", 
            "id_10": "Повар"
       }
    }`,


     femaleProfessions: `{
        "count": 10,
        "list": {
            "id_1": "Воспитатель", 
            "id_2": "Медсестра", 
            "id_3": "Парикмахер", 
            "id_4": "Швея", 
            "id_5": "Учитель", 
            "id_6": "Врач", 
            "id_7": "Продавец", 
            "id_8": "Секретарь", 
            "id_9": "Бухгалтер", 
            "id_10": "Певица"
        }
    }`,
    
    months: `{
        "count": 12,
        "list": {
            "id_1": "января", 
            "id_2": "февраля", 
            "id_3": "марта", 
            "id_4": "апреля", 
            "id_5": "мая", 
            "id_6": "июня", 
            "id_7": "июля", 
            "id_8": "августа", 
            "id_9": "сентября", 
            "id_10": "октября", 
            "id_11": "ноября", 
            "id_12": "декабря"
        }
    }`,


    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json); 

        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; 

        return obj.list[prop]; 
    },

    randomFirstName: function(gender) {
        return gender === "Мужчина" ? 
        this.randomValue(this.firstNameMaleJson) :
        gender === "Женщина" ?
        this.randomValue(this.firstNameFemaleJson):
          "Не указан пол";
    },

   
     randomSurname: function(gender) {
        return gender === "Мужчина" ?
        this.randomValue(this.surnameJson) :
        gender === "Женщина" ?
        this.randomValue(this.surnameJson) + "а" : 
          "Не указан пол";
    },

      randomPatronymic: function (gender) {
        const malePatronymic = this.randomValue(this.firstNameMaleJson);
        const last = malePatronymic.slice(-3);
        if (gender === "Мужчина") {
            // const malePatronymic = this.randomValue(this.firstNameMaleJson);
            // const last = malePatronymic.slice(-3);
            switch (last) {
                case 'иил':
                    return malePatronymic+'ович';
                case 'ита':
                    return malePatronymic.replace(/а$/, 'ович');
                case 'рий':
                case 'рей':
                    return malePatronymic.replace(/й$/, 'евич');
                default:
                    return malePatronymic + 'ович';
            }
        } else if (gender === "Женщина") {

            // поиск через обьект 
            const endings = {
                'рий': 'евна',
                'ита': 'ична',
                'аил': 'ловна',
                'рей': 'евна'
            };
            // undefined  + 'овна'
            return endings[last] ? malePatronymic.slice(0, -1) + (endings[last]) : malePatronymic + 'овна';    
        }
    },


    randomProfession(gender) {
        return gender === "Мужчина" ?
          this.randomValue(this.maleProfessions) :
          gender === "Женщина" ?
            this.randomValue(this.femaleProfessions):
            "Не указана профессия";
      },

    randomGender() {
        return Math.random() < 0.5 ? this.GENDER_MALE : this.GENDER_FEMALE;
      },

    getPerson: function () {

        this.person = {};

        console.log(this.person,'this.person');
        
        gender = this.randomGender();

        this.person.firstName = this.randomFirstName(gender);

        this.person.gender = gender;

        this.person.Surname = this.randomSurname(gender);

        this.person.Patronymic = this.randomPatronymic(gender);

        this.person.Profession  = this.randomProfession(gender);

        const year = this.randomIntNumber(2023, 1997); 
        const month = this.randomIntNumber(12, 1); 
        let day;

    // Ограничение дней для месяцев с 28, 30 днями
    if (month === 2) { // Февраль
        day = this.randomIntNumber(28, 1);
        } else if (month === 4 || month === 6 || month === 9 || month === 11)  { // Апрель, Июнь, Сентябрь, Ноябрь
            day = this.randomIntNumber(30, 1);
            } else {
                day = this.randomIntNumber(31, 1);
            }

        const obj = JSON.parse(this.months);
        this.person.data = `Год рождения `+day + ` ` + obj.list[`id_${month}`] + ` ` + year;

        return this.person;
    }



    
};