import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  keyword = 'building';

  data =  [
    {
      id: 310,
      building: 'Rhoncus Nullam Velit Corp.',
      city: 'Lestizza',
      state: 'Friuli-Venezia Giulia',
      lat: '-79.08218',
      long: '-158.30106',
      phon: '(+91)439-327-218-4',
      email: 'felis.Nulla.tempor@laciniaorciconsectetuer.com'
    },
    {
      id: 367,
      building: 'Risus A Ultricies Corp.',
      city: 'Maringá',
      state: 'PR',
      lat: '17.07502',
      long: '-0.91855',
      phon: '(+91)478-153-595-8',
      email: 'placerat.augue@accumsanlaoreet.co.uk'
    },
    {
      id: 576,
      building: 'Mauris Suspendisse Aliquet Company',
      city: 'Alingsås',
      state: 'Västra Götalands län',
      lat: '3.72603',
      long: '-131.69644',
      phon: '(+91)071-160-383-7',
      email: 'quis.accumsan.convallis@eueuismodac.org'
    },
    {
      id: 483,
      building: 'Gravida Industries',
      city: 'Saint-Urbain',
      state: 'QC',
      lat: '-45.83738',
      long: '99.23718',
      phon: '(+91)008-915-187-2',
      email: 'sem.mollis@tortornibh.edu'
    },
    {
      id: 584,
      building: 'Eget Odio Aliquam Ltd',
      city: 'Lochristi',
      state: 'OV',
      lat: '-86.81453',
      long: '6.54055',
      phon: '(+91)970-913-297-8',
      email: 'ipsum.Suspendisse.sagittis@velitegetlaoreet.ca'
    },
    {
      id: 468,
      building: 'Aliquet Nec Corp.',
      city: 'Jhelum',
      state: 'SI',
      lat: '-2.62707',
      long: '-158.12257',
      phon: '(+91)701-497-244-4',
      email: 'Fusce@dignissim.co.uk'
    },
    {
      id: 234,
      building: 'Sit Amet LLP',
      city: 'Semarang',
      state: 'Central Java',
      lat: '-34.76485',
      long: '-93.18274',
      phon: '(+91)933-363-610-6',
      email: 'imperdiet.nec@iaculis.co.uk'
    },
    {
      id: 306,
      building: 'Suspendisse Sagittis Nullam Inc.',
      city: 'Taber',
      state: 'AB',
      lat: '-30.05142',
      long: '-8.87274',
      phon: '(+91)596-296-989-7',
      email: 'nec.ante@pharetraQuisqueac.edu'
    },
    {
      id: 915,
      building: 'Ornare In Faucibus LLP',
      city: 'Tarma',
      state: 'JUN',
      lat: '35.92574',
      long: '99.74016',
      phon: '(+91)801-949-238-9',
      email: 'magna.nec.quam@a.com'
    },
    {
      id: 527,
      building: 'Integer Vulputate Risus Foundation',
      city: 'Jaén',
      state: 'AN',
      lat: '83.72822',
      long: '-156.0096',
      phon: '(+91)323-807-825-5',
      email: 'odio.Aliquam.vulputate@Aliquamauctor.edu'
    },
    {
      id: 106,
      building: 'Tellus Id Nunc PC',
      city: 'Cabano',
      state: 'Quebec',
      lat: '21.38099',
      long: '-136.70938',
      phon: '(+91)494-378-098-0',
      email: 'vulputate.lacus.Cras@feugiatmetussit.ca'
    },
    {
      id: 208,
      building: 'Luctus Et Company',
      city: 'Mirny',
      state: 'ARK',
      lat: '17.04498',
      long: '97.09876',
      phon: '(+91)313-832-545-6',
      email: 'magna.sed.dui@pharetranibhAliquam.ca'
    },
    {
      id: 609,
      building: 'Fusce Incorporated',
      city: 'Ajax',
      state: 'ON',
      lat: '-35.83512',
      long: '-47.90639',
      phon: '(+91)141-576-366-6',
      email: 'Morbi.non.sapien@at.co.uk'
    },
    {
      id: 346,
      building: 'Magna Phasellus Company',
      city: 'Bragança',
      state: 'Pará',
      lat: '-77.09236',
      long: '88.7949',
      phon: '(+91)490-856-906-7',
      email: 'aliquam.enim.nec@sempertellusid.edu'
    },
    {
      id: 843,
      building: 'Diam Institute',
      city: 'Mata de Plátano',
      state: 'San José',
      lat: '89.75179',
      long: '52.78845',
      phon: '(+91)597-081-675-0',
      email: 'tempor@Aliquamnec.ca'
    },
    {
      id: 889,
      building: 'Vitae Inc.',
      city: 'Montague',
      state: 'PE',
      lat: '-83.10198',
      long: '-9.45541',
      phon: '(+91)956-724-606-6',
      email: 'vel@Proin.com'
    },
    {
      id: 320,
      building: 'Ante Company',
      city: 'Piotrków Trybunalski',
      state: 'łódzkie',
      lat: '11.10806',
      long: '156.06436',
      phon: '(+91)506-363-781-8',
      email: 'dictum.placerat.augue@perinceptos.org'
    },
    {
      id: 375,
      building: 'Ut Mi Industries',
      city: 'Serang',
      state: 'BT',
      lat: '-19.20321',
      long: '-0.50734',
      phon: '(+91)230-507-680-5',
      email: 'adipiscing@aliquam.net'
    },
    {
      id: 469,
      building: 'Urna LLC',
      city: 'Singkawang',
      state: 'West Kalimantan',
      lat: '21.58231',
      long: '85.81617',
      phon: '(+91)750-877-587-6',
      email: 'ipsum.dolor.sit@nondapibusrutrum.com'
    },
    {
      id: 805,
      building: 'Sed Tortor Integer Corporation',
      city: 'Lambersart',
      state: 'Nord-Pas-de-Calais',
      lat: '-2.58181',
      long: '162.32965',
      phon: '(+91)212-785-131-7',
      email: 'lacus.Mauris@Pellentesquetincidunttempus.edu'
    },
    {
      id: 787,
      building: 'Malesuada Ut Sem LLC',
      city: 'Cajamarca',
      state: 'Cajamarca',
      lat: '-54.29094',
      long: '167.86888',
      phon: '(+91)741-137-847-6',
      email: 'vestibulum.nec@vel.ca'
    },
    {
      id: 869,
      building: 'Ornare Limited',
      city: 'Épernay',
      state: 'Champagne-Ardenne',
      lat: '19.54694',
      long: '-60.18019',
      phon: '(+91)795-931-856-0',
      email: 'molestie@musProinvel.ca'
    },
    {
      id: 242,
      building: 'Tempor Limited',
      city: 'Dongducheon',
      state: 'Gye',
      lat: '-37.71139',
      long: '-151.31135',
      phon: '(+91)972-124-463-3',
      email: 'Aliquam@placerat.org'
    },
    {
      id: 736,
      building: 'Ultricies LLP',
      city: 'Kano',
      state: 'KN',
      lat: '49.91485',
      long: '-105.36251',
      phon: '(+91)003-051-403-1',
      email: 'semper.tellus@montesnascetur.edu'
    },
    {
      id: 740,
      building: 'Rutrum Urna LLC',
      city: 'Kano',
      state: 'Kano',
      lat: '-16.40051',
      long: '87.46826',
      phon: '(+91)098-154-796-5',
      email: 'magna@Proinnislsem.com'
    },
    {
      id: 427,
      building: 'Sapien Imperdiet Ornare Institute',
      city: 'Argenteuil',
      state: 'IL',
      lat: '-22.37579',
      long: '46.50262',
      phon: '(+91)762-724-999-2',
      email: 'sit@nuncrisus.com'
    },
    {
      id: 54,
      building: 'Nibh Enim Limited',
      city: 'Buguma',
      state: 'Rivers',
      lat: '71.42396',
      long: '37.40048',
      phon: '(+91)716-701-113-8',
      email: 'Quisque.tincidunt@purus.com'
    },
    {
      id: 418,
      building: 'Metus PC',
      city: 'Wellington',
      state: 'NI',
      lat: '-38.49404',
      long: '-163.47828',
      phon: '(+91)698-615-521-8',
      email: 'gravida.sit@fermentumarcu.edu'
    },
    {
      id: 79,
      building: 'A Auctor Non Institute',
      city: 'Gisborne',
      state: 'North Island',
      lat: '-21.77776',
      long: '-14.67321',
      phon: '(+91)850-963-366-9',
      email: 'Nam.ac@Phasellusat.org'
    },
    {
      id: 960,
      building: 'Enim PC',
      city: 'Vienna',
      state: 'Vienna',
      lat: '33.17466',
      long: '122.51089',
      phon: '(+91)595-077-913-4',
      email: 'metus.In@arcu.org'
    },
    {
      id: 958,
      building: 'Fusce Mi Lorem Foundation',
      city: 'Gliwice',
      state: 'SL',
      lat: '-72.27988',
      long: '136.61211',
      phon: '(+91)631-065-975-8',
      email: 'vulputate.dui.nec@Sed.ca'
    },
    {
      id: 660,
      building: 'Vestibulum Corp.',
      city: 'Vologda',
      state: 'VLG',
      lat: '84.65142',
      long: '133.17148',
      phon: '(+91)102-137-133-9',
      email: 'hendrerit@velitegestas.org'
    },
    {
      id: 166,
      building: 'Nec Ante Associates',
      city: 'Bathurst',
      state: 'NSW',
      lat: '38.92513',
      long: '-50.00718',
      phon: '(+91)933-817-035-3',
      email: 'Integer@elementum.com'
    },
    {
      id: 650,
      building: 'Quis Pede LLC',
      city: 'Salt Lake City',
      state: 'UT',
      lat: '-52.89674',
      long: '-144.94856',
      phon: '(+91)187-369-168-1',
      email: 'magna.a.neque@sit.com'
    },
    {
      id: 216,
      building: 'Tristique Senectus Et Institute',
      city: 'Tver',
      state: 'Tver Oblast',
      lat: '-83.15276',
      long: '25.95419',
      phon: '(+91)542-770-017-3',
      email: 'vulputate@arcu.net'
    },
    {
      id: 386,
      building: 'Dictum Mi Ac Associates',
      city: 'Itagüí',
      state: 'Antioquia',
      lat: '51.56065',
      long: '-114.10636',
      phon: '(+91)083-147-250-7',
      email: 'nec@egestas.org'
    },
    {
      id: 480,
      building: 'Nulla Cras Eu Limited',
      city: 'Combarbalá',
      state: 'Coquimbo',
      lat: '57.03363',
      long: '13.42597',
      phon: '(+91)778-138-351-7',
      email: 'Phasellus.at@faucibusMorbivehicula.edu'
    },
    {
      id: 123,
      building: 'Eu Corporation',
      city: 'Tournefeuille',
      state: 'Midi-Pyrénées',
      lat: '-37.53592',
      long: '-59.81626',
      phon: '(+91)822-870-764-7',
      email: 'Morbi@odio.ca'
    },
    {
      id: 369,
      building: 'Dui In Sodales LLP',
      city: 'Pakpatan',
      state: 'PU',
      lat: '-46.8277',
      long: '63.98584',
      phon: '(+91)677-916-175-5',
      email: 'consequat@nonummyipsumnon.org'
    },
    {
      id: 742,
      building: 'Nullam Vitae Diam Industries',
      city: 'San Cristóbal de la Laguna',
      state: 'CN',
      lat: '4.41774',
      long: '-142.35611',
      phon: '(+91)210-873-083-2',
      email: 'dictum@dictummi.net'
    },
    {
      id: 490,
      building: 'Massa Foundation',
      city: 'Dieppe',
      state: 'Haute-Normandie',
      lat: '19.31931',
      long: '61.13048',
      phon: '(+91)961-280-121-4',
      email: 'porttitor.vulputate@diam.ca'
    },
    {
      id: 424,
      building: 'Ultricies Industries',
      city: 'Kostroma',
      state: 'KOS',
      lat: '-11.60604',
      long: '18.6466',
      phon: '(+91)796-146-046-2',
      email: 'odio.semper.cursus@justo.edu'
    },
    {
      id: 637,
      building: 'Leo In Lobortis Foundation',
      city: 'Worcester',
      state: 'Massachusetts',
      lat: '7.30965',
      long: '64.06343',
      phon: '(+91)719-907-779-2',
      email: 'Phasellus@velvulputate.com'
    },
    {
      id: 928,
      building: 'Proin Dolor Corporation',
      city: 'Kediri',
      state: 'East Java',
      lat: '0.69175',
      long: '-13.87873',
      phon: '(+91)129-491-438-4',
      email: 'fringilla@Aliquam.net'
    },
    {
      id: 650,
      building: 'Risus Institute',
      city: 'Peutie',
      state: 'VB',
      lat: '0.10759',
      long: '127.51457',
      phon: '(+91)420-210-227-1',
      email: 'amet.massa.Quisque@adipiscingelit.co.uk'
    },
    {
      id: 972,
      building: 'Eu Eleifend Nec Corp.',
      city: 'Vallentuna',
      state: 'AB',
      lat: '-74.61064',
      long: '-156.28224',
      phon: '(+91)616-080-326-0',
      email: 'ultricies@scelerisquelorem.org'
    },
    {
      id: 441,
      building: 'Nam Consulting',
      city: 'Maryborough',
      state: 'QLD',
      lat: '-88.57821',
      long: '150.44209',
      phon: '(+91)675-857-140-6',
      email: 'Donec.consectetuer.mauris@orci.co.uk'
    },
    {
      id: 712,
      building: 'Mollis Dui Consulting',
      city: 'Port Lincoln',
      state: 'South Australia',
      lat: '32.0143',
      long: '-150.88639',
      phon: '(+91)542-898-458-9',
      email: 'sem.Pellentesque@anteVivamusnon.co.uk'
    },
    {
      id: 55,
      building: 'Ipsum Suspendisse Incorporated',
      city: 'Ivanovo',
      state: 'Ivanovo Oblast',
      lat: '12.48665',
      long: '-96.71434',
      phon: '(+91)467-332-771-3',
      email: 'mi.enim.condimentum@eget.edu'
    },
    {
      id: 726,
      building: 'Mauris Integer Sem Institute',
      city: 'Gwangju',
      state: 'Gyeonggi',
      lat: '-38.07028',
      long: '-41.53409',
      phon: '(+91)219-674-691-1',
      email: 'et.pede@felis.net'
    },
    {
      id: 486,
      building: 'Cursus Company',
      city: 'Solesino',
      state: 'VEN',
      lat: '60.65226',
      long: '38.99682',
      phon: '(+91)698-745-359-6',
      email: 'ornare.tortor@egestas.edu'
    },
    {
      id: 715,
      building: 'Consequat Inc.',
      city: 'Gubkin',
      state: 'Belgorod Oblast',
      lat: '5.78625',
      long: '-70.32047',
      phon: '(+91)509-400-468-9',
      email: 'enim.nisl@augue.co.uk'
    },
    {
      id: 673,
      building: 'Tincidunt PC',
      city: 'Waidhofen an der Ybbs',
      state: 'NÖ.',
      lat: '-80.7907',
      long: '-140.2786',
      phon: '(+91)864-975-125-2',
      email: 'posuere@arcuac.edu'
    },
    {
      id: 531,
      building: 'Ut Industries',
      city: 'Abbottabad',
      state: 'KPK',
      lat: '-13.832',
      long: '-84.1335',
      phon: '(+91)663-944-850-0',
      email: 'dolor@tellusjustosit.edu'
    },
    {
      id: 488,
      building: 'Iaculis Lacus Pede Company',
      city: 'South Bend',
      state: 'IN',
      lat: '-82.62611',
      long: '-149.90096',
      phon: '(+91)749-239-568-7',
      email: 'sem.magna.nec@quis.net'
    },
    {
      id: 557,
      building: 'Nec Orci Limited',
      city: 'Cusco',
      state: 'Cusco',
      lat: '29.11248',
      long: '-56.87484',
      phon: '(+91)678-913-094-6',
      email: 'eu.ligula@arcuimperdietullamcorper.co.uk'
    },
    {
      id: 26,
      building: 'Fusce Limited',
      city: 'Fogo',
      state: 'Newfoundland and Labrador',
      lat: '-1.63433',
      long: '-84.442',
      phon: '(+91)971-846-932-4',
      email: 'erat@erat.edu'
    },
    {
      id: 646,
      building: 'Eget Varius Ultrices LLC',
      city: 'Skardu',
      state: 'GB',
      lat: '59.2179',
      long: '-36.86904',
      phon: '(+91)781-636-322-0',
      email: 'iaculis.lacus.pede@tortor.ca'
    },
    {
      id: 430,
      building: 'Neque Morbi Institute',
      city: 'Dokkum',
      state: 'Friesland',
      lat: '-61.93914',
      long: '-42.16136',
      phon: '(+91)853-991-551-2',
      email: 'Praesent.luctus.Curabitur@fermentum.co.uk'
    },
    {
      id: 543,
      building: 'Purus Mauris A Industries',
      city: 'Jaén',
      state: 'Cajamarca',
      lat: '39.02091',
      long: '-97.86489',
      phon: '(+91)025-207-646-5',
      email: 'facilisi@sollicitudin.edu'
    },
    {
      id: 528,
      building: 'Interdum Enim Limited',
      city: 'Hay-on-Wye',
      state: 'Brecknockshire',
      lat: '42.82126',
      long: '-164.39668',
      phon: '(+91)608-141-655-1',
      email: 'aliquam.eu.accumsan@maurisanunc.org'
    },
    {
      id: 976,
      building: 'Semper Auctor Corp.',
      city: 'Kawartha Lakes',
      state: 'Ontario',
      lat: '71.85624',
      long: '118.01538',
      phon: '(+91)721-710-085-4',
      email: 'facilisis.magna@inaliquetlobortis.ca'
    },
    {
      id: 999,
      building: 'Fusce Dolor Limited',
      city: 'Rockhampton',
      state: 'Queensland',
      lat: '-31.09766',
      long: '0.57106',
      phon: '(+91)156-236-949-4',
      email: 'pharetra.sed.hendrerit@penatibus.net'
    },
    {
      id: 694,
      building: 'Aliquam Adipiscing Lobortis Corp.',
      city: 'Muzaffarpur',
      state: 'BR',
      lat: '-38.62406',
      long: '-55.47489',
      phon: '(+91)592-512-131-7',
      email: 'turpis.Aliquam.adipiscing@enim.co.uk'
    },
    {
      id: 285,
      building: 'Ornare Placerat Consulting',
      city: 'Piracicaba',
      state: 'SP',
      lat: '-77.49092',
      long: '-97.9567',
      phon: '(+91)793-752-226-5',
      email: 'habitant@gravidasagittisDuis.edu'
    },
    {
      id: 595,
      building: 'Nam Ligula Elit Corp.',
      city: 'Talara',
      state: 'Piura',
      lat: '66.78121',
      long: '-97.27535',
      phon: '(+91)794-674-322-9',
      email: 'metus.Aliquam.erat@pedeacurna.org'
    },
    {
      id: 48,
      building: 'Donec Dignissim Corp.',
      city: 'San José de Alajuela',
      state: 'A',
      lat: '-73.60543',
      long: '25.07148',
      phon: '(+91)009-596-867-0',
      email: 'tincidunt.pede@portaelit.ca'
    },
    {
      id: 860,
      building: 'Ac Orci Corporation',
      city: 'Orvault',
      state: 'PA',
      lat: '0.80731',
      long: '-36.19735',
      phon: '(+91)872-306-695-6',
      email: 'orci.consectetuer.euismod@sollicitudincommodoipsum.net'
    },
    {
      id: 722,
      building: 'Non Industries',
      city: 'Istanbul',
      state: 'Ist',
      lat: '50.02229',
      long: '79.35607',
      phon: '(+91)785-091-190-2',
      email: 'vestibulum.lorem.sit@aliquetPhasellusfermentum.org'
    },
    {
      id: 608,
      building: 'Nulla Integer Industries',
      city: 'Zapopan',
      state: 'Jalisco',
      lat: '59.73713',
      long: '13.63655',
      phon: '(+91)148-820-229-4',
      email: 'augue.ac.ipsum@sociosquad.org'
    },
    {
      id: 532,
      building: 'Elit Foundation',
      city: 'Dublin',
      state: 'L',
      lat: '-10.7553',
      long: '-67.84638',
      phon: '(+91)626-539-475-9',
      email: 'feugiat@leoelementumsem.ca'
    },
    {
      id: 305,
      building: 'Nulla Tincidunt Company',
      city: 'Dublin',
      state: 'L',
      lat: '-33.78377',
      long: '142.13163',
      phon: '(+91)698-226-214-2',
      email: 'magnis@nequevenenatis.com'
    },
    {
      id: 34,
      building: 'Mauris Blandit Company',
      city: 'Vienna',
      state: 'Vienna',
      lat: '-61.48292',
      long: '4.66778',
      phon: '(+91)093-616-623-6',
      email: 'luctus.vulputate.nisi@nonvestibulumnec.co.uk'
    },
    {
      id: 667,
      building: 'Ornare Associates',
      city: 'Huntly',
      state: 'NI',
      lat: '4.1886',
      long: '5.81089',
      phon: '(+91)770-768-560-7',
      email: 'nibh@molestie.net'
    },
    {
      id: 325,
      building: 'Dolor Tempus Non Company',
      city: 'Kanpur',
      state: 'UP',
      lat: '5.25276',
      long: '30.76371',
      phon: '(+91)100-067-519-7',
      email: 'consectetuer@leoMorbineque.co.uk'
    },
    {
      id: 208,
      building: 'Penatibus Et Institute',
      city: 'Groenlo',
      state: 'Gl',
      lat: '-45.93465',
      long: '11.34898',
      phon: '(+91)478-510-209-6',
      email: 'est.Mauris@Vivamusnibh.edu'
    },
    {
      id: 481,
      building: 'Suspendisse Commodo LLC',
      city: 'Gunsan',
      state: 'Jeo',
      lat: '50.51896',
      long: '163.72373',
      phon: '(+91)120-634-215-8',
      email: 'cursus.in.hendrerit@facilisis.net'
    },
    {
      id: 608,
      building: 'Ornare Institute',
      city: 'La Roche-sur-Yon',
      state: 'PA',
      lat: '84.68075',
      long: '83.02338',
      phon: '(+91)528-490-216-9',
      email: 'tincidunt@consequatlectussit.net'
    },
    {
      id: 873,
      building: 'Nibh Lacinia Foundation',
      city: 'Carmen de Bolivar',
      state: 'Bolívar',
      lat: '-36.66092',
      long: '102.15191',
      phon: '(+91)601-660-951-8',
      email: 'semper.erat.in@interdum.edu'
    },
    {
      id: 486,
      building: 'Cras LLP',
      city: 'Río Bueno',
      state: 'Los Ríos',
      lat: '-80.34696',
      long: '138.32935',
      phon: '(+91)778-302-613-2',
      email: 'purus.mauris@auctorvitaealiquet.co.uk'
    },
    {
      id: 473,
      building: 'Tempus Risus Donec PC',
      city: 'Alphen aan den Rijn',
      state: 'Zuid Holland',
      lat: '-69.59048',
      long: '95.46938',
      phon: '(+91)374-282-770-0',
      email: 'est.vitae@vel.net'
    },
    {
      id: 595,
      building: 'Amet Orci Ut Corporation',
      city: 'Uberaba',
      state: 'MG',
      lat: '-73.24218',
      long: '-45.89787',
      phon: '(+91)648-269-819-4',
      email: 'per.conubia@acfermentum.net'
    },
    {
      id: 786,
      building: 'Praesent Eu Corporation',
      city: 'Villa Cortese',
      state: 'Lombardia',
      lat: '8.77511',
      long: '-3.81118',
      phon: '(+91)246-764-078-2',
      email: 'dignissim.magna.a@mollis.ca'
    },
    {
      id: 383,
      building: 'Molestie LLP',
      city: 'Calmar',
      state: 'AB',
      lat: '80.15364',
      long: '-64.54205',
      phon: '(+91)612-754-365-4',
      email: 'malesuada.ut@vitae.co.uk'
    },
    {
      id: 721,
      building: 'Donec Consectetuer Mauris PC',
      city: 'San José',
      state: 'San José',
      lat: '14.15604',
      long: '-130.6047',
      phon: '(+91)033-729-143-1',
      email: 'pharetra.nibh.Aliquam@sit.net'
    },
    {
      id: 416,
      building: 'Sed Diam Incorporated',
      city: 'Hildesheim',
      state: 'Niedersachsen',
      lat: '-79.37954',
      long: '-110.79688',
      phon: '(+91)849-175-722-1',
      email: 'pellentesque.Sed@nisi.net'
    },
    {
      id: 518,
      building: 'Nam Ligula Corp.',
      city: 'Monterrey',
      state: 'N.L',
      lat: '-1.63336',
      long: '148.94513',
      phon: '(+91)854-394-132-1',
      email: 'libero@Donecegestas.org'
    },
    {
      id: 520,
      building: 'Vestibulum Neque LLC',
      city: 'Bankura',
      state: 'West Bengal',
      lat: '79.87916',
      long: '35.69988',
      phon: '(+91)664-704-516-6',
      email: 'egestas.Aliquam@imperdietnec.ca'
    },
    {
      id: 761,
      building: 'Arcu Aliquam Ultrices Associates',
      city: 'Ternate',
      state: 'North Maluku',
      lat: '5.31965',
      long: '22.39202',
      phon: '(+91)662-658-863-3',
      email: 'consectetuer@magna.com'
    },
    {
      id: 260,
      building: 'Libero Mauris Foundation',
      city: 'Dos Hermanas',
      state: 'Andalucía',
      lat: '32.10371',
      long: '-50.92819',
      phon: '(+91)147-310-326-7',
      email: 'sagittis@natoque.edu'
    },
    {
      id: 87,
      building: 'Et Netus Et Corp.',
      city: 'Goyang',
      state: 'Gyeonggi',
      lat: '-83.64559',
      long: '110.01951',
      phon: '(+91)028-156-667-5',
      email: 'consequat.auctor.nunc@sodalesnisimagna.net'
    },
    {
      id: 331,
      building: 'Nullam Industries',
      city: 'Aubagne',
      state: 'Provence-Alpes-Côte d\'Azur',
      lat: '76.12608',
      long: '110.48361',
      phon: '(+91)757-008-518-8',
      email: 'eu.sem.Pellentesque@lectus.com'
    },
    {
      id: 133,
      building: 'Dapibus Id Industries',
      city: 'Nampa',
      state: 'ID',
      lat: '-38.47982',
      long: '-14.60336',
      phon: '(+91)231-636-422-3',
      email: 'mauris.aliquam.eu@egestasligulaNullam.org'
    },
    {
      id: 674,
      building: 'Pede Limited',
      city: 'Ostrowiec Świętokrzyski',
      state: 'Swiętokrzyskie',
      lat: '-55.42885',
      long: '89.59042',
      phon: '(+91)705-566-650-8',
      email: 'Donec.nibh.Quisque@pellentesqueafacilisis.org'
    },
    {
      id: 751,
      building: 'Non Associates',
      city: 'Kapolei',
      state: 'Hawaii',
      lat: '50.11993',
      long: '5.48259',
      phon: '(+91)576-354-148-3',
      email: 'mattis@vel.edu'
    },
    {
      id: 359,
      building: 'Penatibus Et Inc.',
      city: 'San Isidro de El General',
      state: 'San José',
      lat: '-4.06835',
      long: '-130.17757',
      phon: '(+91)293-017-176-6',
      email: 'eget.venenatis.a@odiotristiquepharetra.net'
    },
    {
      id: 647,
      building: 'Purus PC',
      city: 'Poznań',
      state: 'WP',
      lat: '-63.09661',
      long: '-171.80581',
      phon: '(+91)717-811-602-5',
      email: 'nisi@miDuisrisus.edu'
    },
    {
      id: 152,
      building: 'Eu Tempor Inc.',
      city: 'İzmit',
      state: 'Koc',
      lat: '-13.01329',
      long: '65.9797',
      phon: '(+91)367-774-805-7',
      email: 'a@tellus.com'
    },
    {
      id: 595,
      building: 'Phasellus Company',
      city: 'Chiclayo',
      state: 'Lambayeque',
      lat: '6.71663',
      long: '-112.61527',
      phon: '(+91)601-326-373-2',
      email: 'est.Mauris.eu@lobortismauris.co.uk'
    },
    {
      id: 372,
      building: 'Faucibus Ut Nulla Corp.',
      city: 'Nässjö',
      state: 'F',
      lat: '33.08433',
      long: '-148.23365',
      phon: '(+91)442-208-526-7',
      email: 'ultricies.adipiscing@mattisCraseget.org'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  selectEvent(item: any): any{
    // do something with selected item
  }

  onChangeSearch(val: string): any{
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e: any): any{
    // do something when input is focused
  }


}
