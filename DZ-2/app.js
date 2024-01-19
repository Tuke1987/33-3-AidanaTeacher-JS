var numbers = [34, 65, 67, 89, 8, 9, 23, 21, 10, 23, 28];

for (var i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) === 0) {
        console.log(numbers[i]);
    }
}

var cinema = {
    name: 'Utah Cinema',
    moviesAndCartoons: {
        DjangoUnchained: {
            genre: 'Western/Action',
            premiereDate: '25 on December 2012',
            duration: '2 h 45 min',
            mainCharacters: {
                QuentinTarantino: 'American film director and screenwriter',
                ChristophWaltz: 'Actor and director',
                JamieFox: 'American actor and singer',
                LeonardoDiCaprio: 'American actor and film producer'
            },
            ticketPrise: '2.50$',
            measurement: '3D',
        },
        RickAndMorty: {
            genre: 'Situation comedy',
            premiereDate: '2 on December 2013',
            duration: '7 seasons',
            mainCharacters: 'Rick and Morty',
            ticketPrise: '1.75$',
            measurement: '2D',
        },
        ShutterIsland: {
            genre: 'Thriller/Detective',
            premiereDate: '19 on February 2010',
            duration: '2 h 18 min',
            mainCharacters: {
                LeonardoDiCaprio: 'Favorite actor, I recommend movies with him',
                MarkRuffalo: 'American actor and film producer',
                BenKingsley: 'British actor',
            },
            ticketPrise: '4.50$',
            measurement: '3D',
        },
        SpongeBobSquarePants: {
            genre: 'comedy',
            premiereDate: '1999',
            duration: '13 seasons',
            mainCharacters: {
                SpongeBobSquarePants: 'Sponge Bob is a vibrant and cheerful sea sponge',
                PatrickStar: 'Patrick the Star is SpongeBob’s neighbor and best friend',
                SquidwardTentacles: 'Squidward - a humanlike octopus, who lives in a stone house',
            }
        }
    }
}


var number = prompt('Введите свое число')


switch (number){
    case '1':
        alert('Ваше число на римском будет' + ' ' + ' - ' + 'I')
        break
    case '2':
        alert('Ваше число на римском будет' + ' ' + ' - ' + 'II')
        break
    case '3':
        alert('Ваше число на римском будет' + ' ' + ' - ' + 'III')
        break
    case '4':
        alert('Ваше число на римском будет' + ' ' + ' - ' + 'IV')
        break
    case '5':
        alert('Ваше число на римском будет' + ' ' + ' - ' + 'V')
        break
    case '6':
        alert('Ваше число на римском будет' + ' ' + ' - ' + 'VI')
        break
    case '7':
        alert('Ваше число на римском будет' + ' ' + ' - ' + 'VII')
        break
    case '8':
        alert('Ваше число на римском будет' + ' ' + ' - ' + 'VIII')
        break
    case '9':
        alert('Ваше число на римском будет' + ' ' + ' - ' + 'IX')
        break
    case '10':
        alert('Ваше число на римском будет' + ' ' + ' - ' + 'X')
        break
    case '11':
        alert('Ваше число на римском будет' + ' ' + ' - ' + 'XI')
        break
    case '12':
        alert('Ваше число на римском будет' + ' ' + ' - ' + 'XII')
        break
    case '13':
        alert('Ваше число на римском будет' + ' ' + ' - ' + 'XIII')
        break
    case '14':
        alert('Ваше число на римском будет' + ' ' + ' - ' + 'XIV')
        break
    case '15':
        alert('Ваше число на римском будет' + ' ' + ' - ' + 'XV')
        break
    default:
        console.warn('НЕВЕРНЫЕ ДАННЫЕ')
}
