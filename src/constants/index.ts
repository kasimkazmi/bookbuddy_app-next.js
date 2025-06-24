import IMAGES from './images';

// Navigation
export const NAV_LINKS = [
    {
        href: '/',
        key: 'bookCategories',
        label: 'Book Categories'
    },
    {
        href: '/',
        key: 'fiction',
        label: 'Fiction'
    },
    {
        href: '/',
        key: 'nonfiction',
        label: 'Nonfiction'
    },
    {
        href: '/',
        key: 'youndTeenAdult',
        label: 'Young & Teens Adult'
    },

    {
        href: '/',
        key: 'kids',
        label: 'Kids'
    },
    {
        href: '/',
        key: 'discountAisle',
        label: 'Discount Aisle'
    }
];
export const FOOTER_LINKS = {
    title: 'Learn More',
    links: [
        { label: 'About', value: '/about' },
        { label: 'Jobs', value: '/jobs' },
        { label: 'Privacy Policy', value: '/' },
        { label: 'Contact US', value: '/contact' }
    ]
};

export const COMUNITY_LINK = {
    title: 'Our comunity',
    links: [
        { label: 'BookHUb', value: '' },
        { label: 'Story-Club', value: '' }
    ]
};

export const FOOTER_CONTACT_INFO = {
    title: 'Contact us',
    links: [
        { label: 'Email', value: 'kasimdev27@gmail.com' },
        { label: 'Number', value: '+14378183810' }
    ]
};

export const SOCIAL_CONTACT = {
    title: 'Social Media',
    links: [
        {
            label: 'Facebook',
            value: 'https://www.facebook.com/kasim.dev.7'
        },
        {
            label: 'Instagram',
            value: 'https://www.instagram.com/kasim.dev.7'
        },
        {
            label: 'Twitter',
            value: 'https://twitter.com/kasimdev7'
        },
        {
            label: 'Github',
            value: 'https://github.com/kasimdev7'
        },
        {
            label: 'Linkedin',
            value: 'https://www.linkedin.com/in/kasim-dev-7a4b2'
        }
    ]
};

export const BOOK_CATEGORIES = [
    {
        heading: 'New',
        categories: [
            { label: 'New Arrivals', value: 'new-arrivals' },
            { label: 'Recently Published', value: 'recently-published' }
        ]
    },
    {
        heading: 'Bestsellers',
        categories: [
            { label: 'Top 200', value: 'top-200' },
            {
                label: 'New York Times Best Sellers',
                value: 'new-york-times-best-sellers'
            },
            { label: "What's the Buzz?", value: 'whats-the-buzz' },
            { label: 'Popular Fiction', value: 'popular-fiction' },
            { label: 'Popular Nonfiction', value: 'popular-nonfiction' }
        ]
    },
    {
        heading: 'Frugal Finds',
        categories: [
            { label: 'Under $7', value: 'under-7' },
            { label: 'Under $10', value: 'under-10' },
            { label: 'Under $10 Hardcovers', value: 'under-10-hardcovers' }
        ]
    },
    {
        heading: 'Top Categories',
        categories: [
            { label: 'Biography and Memoir', value: 'biography-and-memoir' },
            {
                label: 'Business and Economics',
                value: 'business-and-economics'
            },
            { label: 'Classics', value: 'classics' },
            {
                label: 'Comics and Graphic Novels',
                value: 'comics-and-graphic-novels'
            },
            {
                label: 'Cooking, Food and Drink',
                value: 'cooking-food-and-drink'
            },
            { label: 'Crafts and Hobbies', value: 'crafts-and-hobbies' },
            { label: 'Fantasy', value: 'fantasy' },
            { label: 'Health and Wellness', value: 'health-and-wellness' },
            { label: 'Historical Fiction', value: 'historical-fiction' },
            { label: 'History and Geography', value: 'history-and-geography' },
            { label: 'Manga', value: 'manga' },
            { label: 'Poetry', value: 'poetry' },
            {
                label: 'Religion and Spirituality',
                value: 'religion-and-spirituality'
            },
            { label: 'Romance', value: 'romance' },
            { label: 'Romantasy', value: 'romantasy' },
            { label: 'Science Fiction', value: 'science-fiction' },
            {
                label: 'Self-Help and Relationships',
                value: 'self-help-and-relationships'
            },
            {
                label: 'Thrillers and Suspense',
                value: 'thrillers-and-suspense'
            },
            { label: 'True Crime', value: 'true-crime' },
            { label: 'View All Categories', value: 'view-all-categories' }
        ]
    },
    {
        heading: 'View All books',
        categories: [
            { label: 'View More', value: 'fiction' },
            { label: 'Fantasy', value: 'fantasy' }
        ]
    }
    // },
    // {
    //   heading: "Kids' Books",
    //   categories: [
    //     { label: "Ages 0-2", value: "ages-0-2" },
    //     { label: "Ages 3-5", value: "ages-3-5" },
    //     { label: "Ages 6-8", value: "ages-6-8" },
    //     { label: "Ages 9-12", value: "ages-9-12" },
    //   ],
    // },
    // {
    //   heading: "Other Products",
    //   categories: [
    //     { label: "Activity Sets", value: "activity-sets" },
    //     { label: "Jigsaw Puzzles", value: "jigsaw-puzzles" },
    //     { label: "Games Books", value: "games-books" },
    //     { label: "Adult Colouring Books", value: "adult-colouring-books" },
    //     { label: "IncrediBuilds", value: "incredi-builds" },
    //   ],
    // },
    // {
    //   heading: "Discover",
    //   categories: [
    //     { label: "Bestsellers of 2024 (so far)", value: "bestsellers-of-2024" },
    //     { label: "Summer Lovin'", value: "summer-lovin" },
    //     { label: "Trending Authors", value: "trending-authors" },
    //     { label: "Trending on #BookTok", value: "trending-on-booktok" },
    //     { label: "July Staff Picks", value: "july-staff-picks" },
    //     { label: "Award Winners", value: "award-winners" },
    //     { label: "Black Literature", value: "black-literature" },
    //     { label: "Paper Mill Press Classics", value: "paper-mill-press-classics" },
    //     { label: "Celebrity Book Club Picks", value: "celebrity-book-club-picks" },
    //     { label: "Pretty Covers", value: "pretty-covers" },
    //     { label: "Coffee Table Books", value: "coffee-table-books" },
    //     { label: "Book-to-Screen Adaptations", value: "book-to-screen-adaptations" },
    //     { label: "Debut Novels", value: "debut-novels" },
    //     { label: "Boxed Sets", value: "boxed-sets" },
    //     { label: "Gift Guide", value: "gift-guide" },
    //     { label: "Large Print", value: "large-print" },
    //   ],
    // },
];
export const FICTION_CATEGORIES = [
    { label: 'New Fiction', value: 'new-fiction' },
    { label: 'New Arrivals', value: 'new-arrivals' },
    { label: 'Recently Published', value: 'recently-published' },
    { label: 'Fiction Bestsellers', value: 'fiction-bestsellers' },
    {
        label: 'New York Times Best Sellers',
        value: 'new-york-times-bestsellers'
    },
    { label: 'Popular Fiction', value: 'popular-fiction' },
    { label: 'Action and Adventure', value: 'action-and-adventure' },
    { label: 'Classics', value: 'classics' },
    { label: 'Contemporary', value: 'contemporary' },
    { label: 'Fantasy', value: 'fantasy' },
    { label: 'Historical', value: 'historical' },
    { label: 'Historical Romance', value: 'historical-romance' },
    { label: 'Horror and Paranormal', value: 'horror-and-paranormal' },
    { label: 'Literary', value: 'literary' },
    { label: 'Mystery and Crime', value: 'mystery-and-crime' },
    { label: 'Religious', value: 'religious' },
    { label: 'Romance', value: 'romance' },
    { label: 'Science Fiction', value: 'science-fiction' },
    { label: 'Thrillers and Suspense', value: 'thrillers-and-suspense' },
    { label: 'YA Fiction', value: 'ya-fiction' },
    { label: "Summer Lovin'", value: 'summer-lovin' },
    { label: 'Trending on #BookTok', value: 'trending-on-booktok' },
    { label: 'Trending Fiction Authors', value: 'trending-fiction-authors' },
    { label: 'July Staff Picks', value: 'july-staff-picks' },
    { label: 'Award Winners', value: 'award-winners' },
    { label: 'Paper Mill Press Classics', value: 'paper-mill-press-classics' },
    { label: 'Celebrity Book Club Picks', value: 'celebrity-book-club-picks' },
    { label: 'Retellings', value: 'retellings' },
    {
        label: 'Book-to-Screen Adaptations',
        value: 'book-to-screen-adaptations'
    },
    { label: 'Debut Novels', value: 'debut-novels' }
];

export const NONFICTION_CATEGORIES = [
    { label: 'New Nonfiction', value: 'new-nonfiction' },
    { label: 'New Arrivals', value: 'new-arrivals' },
    { label: 'Recently Published', value: 'recently-published' },
    { label: 'Nonfiction Bestsellers', value: 'nonfiction-bestsellers' },
    {
        label: 'New York Times Best Sellers',
        value: 'new-york-times-bestsellers'
    },
    { label: 'Popular Nonfiction', value: 'popular-nonfiction' },
    { label: 'Art and Photography', value: 'art-and-photography' },
    { label: 'Biography and Memoir', value: 'biography-and-memoir' },
    { label: 'Business', value: 'business' },
    { label: 'Cooking, Food and Drink', value: 'cooking-food-and-drink' },
    { label: 'Crafts and Hobbies', value: 'crafts-and-hobbies' },
    { label: 'Health and Wellness', value: 'health-and-wellness' },
    { label: 'History and Geography', value: 'history-and-geography' },
    { label: 'House and Home', value: 'house-and-home' },
    { label: 'Nature', value: 'nature' },
    { label: 'New Age', value: 'new-age' },
    { label: 'Philosophy', value: 'philosophy' },
    { label: 'Psychology', value: 'psychology' },
    { label: 'Religion and Spirituality', value: 'religion-and-spirituality' },
    { label: 'Science and Technology', value: 'science-and-technology' },
    {
        label: 'Self-Help and Relationships',
        value: 'self-help-and-relationships'
    },
    { label: 'True Crime', value: 'true-crime' },
    { label: 'Summer Cooking', value: 'summer-cooking' },
    { label: 'Trending on #BookTok', value: 'trending-on-booktok' },
    { label: 'July Staff Picks', value: 'july-staff-picks' },
    { label: 'Award Winners', value: 'award-winners' },
    { label: 'Coffee Table Books', value: 'coffee-table-books' },
    { label: 'Celebrity Book Club Picks', value: 'celebrity-book-club-picks' },
    { label: 'Book-to-Screen Adaptations', value: 'book-to-screen-adaptations' }
];

export const TEENS_YOUNG_ADULT_CATEGORIES = [
    { label: 'New Teens & Young Adult', value: 'new-teens-young-adult' },
    { label: 'New Arrivals', value: 'new-arrivals' },
    { label: 'Recently Published', value: 'recently-published' },
    {
        label: 'Teens & Young Adult Bestsellers',
        value: 'teens-young-adult-bestsellers'
    },
    {
        label: 'New York Times Best Sellers',
        value: 'new-york-times-bestsellers'
    },
    {
        label: 'Popular Teens & Young Adult',
        value: 'popular-teens-young-adult'
    },
    { label: 'Action and Adventure', value: 'action-and-adventure' },
    { label: 'Biographies and Memoirs', value: 'biographies-and-memoirs' },
    { label: 'Comics and Graphic Novels', value: 'comics-and-graphic-novels' },
    { label: 'Contemporary', value: 'contemporary' },
    { label: 'Education and Reference', value: 'education-and-reference' },
    { label: 'Family', value: 'family' },
    { label: 'Fantasy', value: 'fantasy' },
    { label: 'Historical', value: 'historical' },
    { label: 'Horror and Paranormal', value: 'horror-and-paranormal' },
    { label: 'Romance', value: 'romance' },
    { label: 'Science Fiction', value: 'science-fiction' },
    { label: 'Thrillers and Suspense', value: 'thrillers-and-suspense' },
    { label: 'Trending on #BookTok', value: 'trending-on-booktok' },
    { label: 'July Staff Picks', value: 'july-staff-picks' },
    {
        label: 'Book-To-Screen Adaptations',
        value: 'book-to-screen-adaptations'
    },
    { label: 'Retellings', value: 'retellings' },
    { label: 'Debut Novels', value: 'debut-novels' }
];

export const POPULAR_TEENS_YOUNG_ADULT_AUTHORS = [
    { label: 'Amy Tintera', value: 'amy-tintera' },
    { label: 'Holly Black', value: 'holly-black' },
    { label: 'Holly Jackson', value: 'holly-jackson' },
    { label: 'Jennifer Lynn Barnes', value: 'jennifer-lynn-barnes' },
    { label: 'Kerri Maniscalco', value: 'kerri-maniscalco' },
    { label: 'Tracy Wolff', value: 'tracy-wolff' }
];

export const KIDS_CATEGORIES = [
    { label: 'New Kids', value: 'new-kids' },
    { label: 'New Arrivals', value: 'new-arrivals' },
    { label: 'Recently Published', value: 'recently-published' },
    { label: "Kids' Bestsellers", value: 'kids-bestsellers' },
    {
        label: 'New York Times Best Sellers',
        value: 'new-york-times-bestsellers'
    },
    { label: "Popular Kids' Books", value: 'popular-kids-books' },
    { label: "ABC's and 123's", value: 'abcs-and-123s' },
    { label: 'Animals', value: 'animals' },
    { label: 'Biography and Memoir', value: 'biography-and-memoir' },
    { label: 'Classics', value: 'classics' },
    {
        label: 'Colouring, Sticker and Activity',
        value: 'colouring-sticker-and-activity'
    },
    { label: 'Comics and Graphic Novels', value: 'comics-and-graphic-novels' },
    { label: 'First Concepts', value: 'first-concepts' },
    { label: 'Crafts and Hobbies', value: 'crafts-and-hobbies' },
    {
        label: 'Fairy Tales, Myths and Legends',
        value: 'fairy-tales-myths-and-legends'
    },
    { label: 'Family', value: 'family' },
    { label: 'Holidays and Celebrations', value: 'holidays-and-celebrations' },
    { label: 'Humour', value: 'humour' },
    { label: 'Nature', value: 'nature' },
    { label: 'Levelled Readers', value: 'levelled-readers' },
    { label: 'Religion', value: 'religion' },
    { label: 'Science and Technology', value: 'science-and-technology' },
    { label: 'Social Situations', value: 'social-situations' },
    { label: 'Summer Activities', value: 'summer-activities' },
    { label: 'July Staff Picks', value: 'july-staff-picks' },
    { label: "Kids' Gift Guide", value: 'kids-gift-guide' },
    { label: 'Silly Stories', value: 'silly-stories' },
    { label: 'Bedtime Stories', value: 'bedtime-stories' },
    { label: 'Diverse Stories', value: 'diverse-stories' },
    { label: "Baby's First Library", value: 'babys-first-library' },
    { label: 'Screen-Free Family Fun', value: 'screen-free-family-fun' }
];

export const POPULAR_KIDS_SERIES = [
    { label: 'Who HQ', value: 'who-hq' },
    { label: 'Little People, Big Dreams', value: 'little-people-big-dreams' },
    { label: 'Spy School', value: 'spy-school' },
    { label: 'InvestiGators', value: 'investigators' }
];

export const POPULAR_KIDS_CHARACTERS = [
    { label: 'Berenstain Bears', value: 'berenstain-bears' },
    { label: 'Paw Patrol', value: 'paw-patrol' },
    { label: 'Pete the Cat', value: 'pete-the-cat' },
    { label: 'Disney', value: 'disney' },
    { label: 'Lego', value: 'lego' }
];

export const EDUCATIONAL_CATEGORIES = [
    { label: 'Levelled Readers', value: 'levelled-readers' },
    { label: 'Workbooks', value: 'workbooks' },
    { label: "Teacher's Picks", value: 'teachers-picks' },
    { label: 'STEM/STEAM', value: 'stem-steam' },
    { label: 'Who HQ', value: 'who-hq' }
];

export const PUZZLES_ACTIVITIES_CATEGORIES = [
    { label: 'Activity Sets', value: 'activity-sets' },
    { label: 'Jigsaw Puzzles', value: 'jigsaw-puzzles' },
    {
        label: 'Colouring and Sticker Books',
        value: 'colouring-and-sticker-books'
    },
    { label: 'IncrediBuilds', value: 'incredi-builds' }
];

export const SHOP_BY_AGE_CATEGORIES = [
    { label: 'Ages 0-2', value: 'ages-0-2' },
    { label: 'Ages 3-5', value: 'ages-3-5' },
    { label: 'Ages 6-8', value: 'ages-6-8' },
    { label: 'Ages 9-12', value: 'ages-9-12' }
];

export const FORMAT_CATEGORIES = [
    { label: 'Picture Books', value: 'picture-books' },
    { label: 'Board Books', value: 'board-books' },
    { label: 'Boxed Sets', value: 'boxed-sets' },
    { label: 'Chapter Books', value: 'chapter-books' },
    { label: 'Pop-Up Books', value: 'pop-up-books' },
    { label: 'Cloth and Bath Books', value: 'cloth-and-bath-books' }
];

export const FICTION_MARKDOWNS = [
    { label: 'Fantasy', value: 'fantasy' },
    { label: 'Horror and Paranormal', value: 'horror-and-paranormal' },
    { label: 'Literary', value: 'literary' },
    { label: 'Mystery and Crime', value: 'mystery-and-crime' },
    { label: 'Romance', value: 'romance' },
    { label: 'Thrillers and Suspense', value: 'thrillers-and-suspense' }
];

export const NONFICTION_MARKDOWNS = [
    { label: 'Business', value: 'business' },
    { label: 'Biography and Memoir', value: 'biography-and-memoir' },
    { label: 'Cooking, Food and Wine', value: 'cooking-food-and-wine' },
    { label: 'History and Geography', value: 'history-and-geography' },
    { label: 'Political Science', value: 'political-science' }
];

export const TEENS_YA_MARKDOWNS = [
    { label: 'Romance', value: 'romance' },
    { label: 'Fantasy', value: 'fantasy' },
    { label: 'Mystery and Crime', value: 'mystery-and-crime' },
    { label: 'Thrillers and Suspense', value: 'thrillers-and-suspense' }
];

export const KIDS_MARKDOWNS = [
    { label: 'Ages 0-2', value: 'ages-0-2' },
    { label: 'Ages 3-5', value: 'ages-3-5' },
    { label: 'Ages 6-8', value: 'ages-6-8' },
    { label: 'Ages 9-12', value: 'ages-9-12' }
];

// carouselData.js
export const carouselSlides = [
    {
        image: 'https://example.com/image1.jpg',
        title: 'Slide 1',
        description: 'This is the first slide',
        price: '$55.99'
    },
    {
        image: 'https://example.com/image2.jpg',
        title: 'Slide 2',
        description: 'This is the second slide',
        price: '$55.99'
    },
    {
        image: 'https://example.com/image3.jpg',
        title: 'Slide 3',
        description: 'This is the third slide',
        price: '$55.99'
    },
    {
        image: 'https://example.com/image4.jpg',
        title: 'Slide 4',
        description: 'This is the fourth slide',
        price: '$55.99'
    },
    {
        image: 'https://example.com/image5.jpg',
        title: 'Slide 5',
        description: 'This is the fifth slide',
        price: '$55.99'
    },
    {
        image: 'https://example.com/image5.jpg',
        title: 'Slide 5',
        description: 'This is the fifth slide',
        price: '$55.99'
    },
    {
        image: 'https://example.com/image5.jpg',
        title: 'Slide 5',
        description: 'This is the fifth slide',
        price: '$55.99'
    },
    {
        image: 'https://example.com/image5.jpg',
        title: 'Slide 5',
        description: 'This is the fifth slide',
        price: '$55.99'
    },
    {
        image: 'https://example.com/image5.jpg',
        title: 'Slide 5',
        description: 'This is the fifth slide',
        price: '$55.99'
    },
    {
        image: 'https://example.com/image5.jpg',
        title: 'Slide 5',
        description: 'This is the fifth slide',
        price: '$55.99'
    }
];

// Broadcast Audio Rooms export

export const broadcastRooms = [
    {
        id: 1,
        title: 'Live Debate: Physical Books vs. eBooks',
        category: 'discussion',
        date: 'July 5, 2025',
        time: '45 min',
        image: IMAGES.discover,
        participants: 86,
        isLive: true,
        isUpcoming: false,
        host: 'BookDebateMaster',
        description:
            'Join our spirited debate between book format enthusiasts. Share your perspective in this interactive audio session!'
    },
    {
        id: 2,
        title: 'Author Interview: Mystery Writer Jane Doe',
        category: 'author',
        date: 'July 3, 2025',
        time: '1 hr',
        image: IMAGES.discover,
        participants: 120,
        isLive: false,
        isUpcoming: true,
        host: 'LiteraryTalks',
        badge: 'Coming Soon',
        description:
            'Go behind the scenes with our featured author as they discuss their writing process.'
    },
    {
        id: 3,
        title: 'Classic Club: "Pride and Prejudice"',
        category: 'club',
        date: 'July 1, 2025',
        time: '1 hr',
        image: IMAGES.discover,
        participants: 64,
        isLive: true,
        isUpcoming: false,
        host: 'ClassicLovers',
        description:
            "Rediscover Jane Austen's masterpiece with fellow literature lovers."
    },
    {
        id: 5,
        title: 'Silent Reading Party',
        category: 'community',
        date: 'June 28, 2025',
        time: '2 hrs',
        image: IMAGES.discover,
        participants: 215,
        isLive: false,
        isUpcoming: false,
        host: 'BookishVibes',
        badge: 'Live Now',
        description:
            'Experience the cozy atmosphere of communal reading with ambient sounds.'
    },
    {
        id: 6,
        title: 'Sci-Fi Book Club',
        category: 'club',
        date: 'June 27, 2025',
        time: '1.5 hrs',
        image: IMAGES.discover,
        participants: 92,
        isLive: false,
        isUpcoming: true,
        host: 'FutureReaders',
        description:
            "Discussion of this month's selected sci-fi novel with expert moderators."
    },
    {
        id: 7,
        title: 'Poetry Night: Open Mic',
        category: 'community',
        date: 'June 25, 2025',
        time: '1 hr',
        image: IMAGES.discover,
        participants: 53,
        isLive: false,
        isUpcoming: true,
        host: 'VerseLovers',
        description:
            'Share your favorite poems or original works in our welcoming space.'
    },
    {
        id: 8,
        title: 'Writing Workshop LIVE',
        category: 'workshop',
        date: 'June 23, 2025',
        time: '2 hrs',
        image: IMAGES.discover,
        participants: 78,
        isLive: true,
        isUpcoming: false,
        host: 'WriteNow',
        badge: 'Live Now',
        description:
            'Interactive writing session with published authors giving real-time feedback.'
    }
];

export const roomsCategories = [
    { id: 'all', label: 'All Rooms' },
    { id: 'live', label: 'Live Now' },
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'discussion', label: 'Discussions' },
    { id: 'author', label: 'Author Events' },
    { id: 'club', label: 'Book Clubs' },
    { id: 'community', label: 'Community' },
    { id: 'workshop', label: 'Workshops' }
];

export const activeSpeakers = [
    {
        id: 1,
        avatar: '🎤',
        name: 'LisaBookLover',
        status: 'Reading aloud',
        isTalking: true
    },
    {
        id: 2,
        avatar: '📚',
        name: 'PageTurner',
        status: 'Discussing chapter 5',
        isTalking: true
    },
    {
        id: 3,
        avatar: '👓',
        name: 'TheBookWorm',
        status: 'Listening intently',
        isTalking: false
    },
    {
        id: 4,
        avatar: '☕',
        name: 'CoffeeAndBooks',
        status: 'Taking notes',
        isTalking: false
    },
    {
        id: 5,
        avatar: '🖋️',
        name: 'LiteraryLyn',
        status: 'Asking questions',
        isTalking: true
    },
    {
        id: 6,
        avatar: '🔖',
        name: 'BookmarkBen',
        status: 'Quoting passages',
        isTalking: true
    },
    {
        id: 7,
        avatar: '🌙',
        name: 'MidnightReader',
        status: 'Sharing insights',
        isTalking: true
    },
    {
        id: 8,
        avatar: '📚',
        name: 'PageTurner2',
        status: 'Discussing chapter 5',
        isTalking: true
    },
    {
        id: 9,
        avatar: '📚',
        name: 'PageTurner3',
        status: 'Discussing chapter 5',
        isTalking: true
    },
    {
        id: 10,
        avatar: '📚',
        name: 'PageTurner4',
        status: 'Discussing chapter 5',
        isTalking: true
    }
];

// userTradeProfile data
export const userTradeProfile = [
    {
        id: 1,
        name: 'Alex Johnson',
        location: 'Toronto, ON',
        distance: '3.2 km away',
        hasBook: true,
        bookTitle: 'The Midnight Library',
        bookCondition: 'Like New',
        lookingFor: ['Atomic Habits', 'The Alchemist']
    },
    {
        id: 2,
        name: 'Jamie Smith',
        location: 'Vancouver, BC',
        distance: '5.1 km away',
        hasBook: true,
        bookTitle: 'Where the Crawdads Sing',
        bookCondition: 'Good',
        lookingFor: ['Educated', 'The Silent Patient']
    },
    {
        id: 3,
        name: 'Emily Davis',
        location: 'Calgary, AB',
        distance: '7.5 km away',
        hasBook: true,
        bookTitle: 'The Silent Patient',
        bookCondition: 'Very Good',
        lookingFor: ['The Night Circus']
    },
    {
        id: 4,
        name: 'Michael Brown',
        location: 'Montreal, QC',
        distance: '10.0 km away',
        hasBook: false,
        bookTitle: '',
        bookCondition: ''
    },
    {
        id: 5,
        name: 'Sarah Wilson',
        location: 'Ottawa, ON',
        distance: '2.8 km away',
        hasBook: true,
        bookTitle: 'Project Hail Mary',
        bookCondition: 'New',
        lookingFor: ['Becoming', 'Dune']
    },
    {
        id: 6,
        name: 'Jessica Taylor',
        location: 'Halifax, NS',
        distance: '4.5 km away',
        hasBook: true,
        bookTitle: 'Educated',
        bookCondition: 'Like New',
        lookingFor: ['Where the Crawdads Sing']
    },
    {
        id: 7,
        name: 'David Lee',
        location: 'Victoria, BC',
        distance: '6.3 km away',
        hasBook: true,
        bookTitle: 'The Great Gatsby',
        bookCondition: 'Good',
        lookingFor: ['1984', 'The Catcher in the Rye']
    },
    {
        id: 8,
        name: 'Sophia Martinez',
        location: 'Edmonton, AB',
        distance: '8.1 km away',
        hasBook: true,
        bookTitle: 'Becoming',
        bookCondition: 'Very Good',
        lookingFor: ['The Midnight Library']
    },
    {
        id: 9,
        name: 'Daniel Kim',
        location: 'Winnipeg, MB',
        distance: '9.0 km away',
        hasBook: false,
        bookTitle: '',
        bookCondition: ''
    },
    {
        id: 10,
        name: 'Olivia Brown',
        location: 'Saskatoon, SK',
        distance: '3.5 km away',
        hasBook: true,
        bookTitle: 'The Alchemist',
        bookCondition: 'Good',
        lookingFor: ['The Book Thief']
    },
    {
        id: 11,
        name: 'Ethan White',
        location: 'Regina, SK',
        distance: '5.2 km away',
        hasBook: true,
        bookTitle: 'The Catcher in the Rye',
        bookCondition: 'Acceptable',
        lookingFor: ['The Road']
    },
    {
        id: 12,
        name: 'Ava Johnson',
        location: "St. John's, NL",
        distance: '7.8 km away',
        hasBook: true,
        bookTitle: 'The Book Thief',
        bookCondition: 'Like New',
        lookingFor: ['The Night Circus', 'Pride and Prejudice']
    },
    {
        id: 13,
        name: 'Liam Harris',
        location: 'Charlottetown, PE',
        distance: '2.0 km away',
        hasBook: true,
        bookTitle: 'The Hobbit',
        bookCondition: 'New',
        lookingFor: ['The Great Gatsby']
    },
    {
        id: 14,
        name: 'Mia Thompson',
        location: 'Fredericton, NB',
        distance: '4.0 km away',
        hasBook: false,
        bookTitle: '',
        bookCondition: ''
    },
    {
        id: 15,
        name: 'Noah Wilson',
        location: 'Yellowknife, NT',
        distance: '6.5 km away',
        hasBook: true,
        bookTitle: '1984',
        bookCondition: 'Good',
        lookingFor: ['Project Hail Mary']
    },
    {
        id: 16,
        name: 'Isabella Scott',
        location: 'Iqaluit, NU',
        distance: '8.3 km away',
        hasBook: true,
        bookTitle: 'Pride and Prejudice',
        bookCondition: 'Very Good',
        lookingFor: ['Becoming']
    },
    {
        id: 17,
        name: 'Lucas Young',
        location: 'Whitehorse, YT',
        distance: '10.1 km away',
        hasBook: true,
        bookTitle: 'The Road',
        bookCondition: 'Like New',
        lookingFor: ['Educated']
    },
    {
        id: 18,
        name: 'Charlotte King',
        location: 'Nanaimo, BC',
        distance: '3.9 km away',
        hasBook: true,
        bookTitle: 'The Fault in Our Stars',
        bookCondition: 'Good',
        lookingFor: ['The Book Thief']
    },
    {
        id: 19,
        name: 'James Hall',
        location: 'Kamloops, BC',
        distance: '5.6 km away',
        hasBook: false,
        bookTitle: '',
        bookCondition: ''
    },
    {
        id: 20,
        name: 'Amelia Green',
        location: 'Lethbridge, AB',
        distance: '7.2 km away',
        hasBook: true,
        bookTitle: 'The Night Circus',
        bookCondition: 'New',
        lookingFor: ['The Hobbit', 'The Great Gatsby']
    }
];
