export interface WeddingEvent {
  id: string;
  title: string;
  tamilTitle: string;
  dateText: string;
  timeText: string;
  timestamp: string; // ISO string for countdown or calendar
  description: string;
  icon: 'reception' | 'marriage';
  auspiciousNote?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  src: string;
}

export interface WeddingConfig {
  couple: {
    groom: {
      name: string;
      tamilName: string;
      title: string;
    };
    bride: {
      name: string;
      tamilName: string;
      title: string;
    };
    monogram: string;
    tagline: string;
    tamilHeading: string;
    invocation: string;
    invitationNote: string;
    artworkImage: string;
    coverImage: string;
    cardImage: string;
  };
  events: WeddingEvent[];
  venue: {
    name: string;
    city: string;
    fullAddress: string;
    landmark?: string;
    googleMapsUrl: string;
    embedMapUrl: string;
  };
  countdown: {
    targetDate: string; // ISO 8601 string: 2026-10-30T06:00:00+05:30
    title: string;
    subtitle: string;
    completedMessage: string;
  };
  music: {
    src: string;
    title: string;
    artist: string;
  };
  contact: {
    whatsappNumber: string;
    rsvpMessage: string;
  };
  gallery: GalleryItem[];
}

export const weddingConfig: WeddingConfig = {
  couple: {
    groom: {
      name: 'SANTHOSH',
      tamilName: '',
      title: 'M.Tech',
    },
    bride: {
      name: 'AKSHAYA',
      tamilName: '',
      title: 'B.E',
    },
    monogram: 'S & A',
    tagline: 'Two Hearts, One Beautiful Beginning',
    tamilHeading: 'Wedding',
    invocation: 'ॐ',
    invitationNote: 'Together with our families, we invite you to our sacred Kalyanam.',
    artworkImage: '/assets/couple_real.jpg',
    coverImage: '/assets/couple_real.jpg',
    cardImage: '/assets/invitation_inside_full.webp',
  },
  events: [
    {
      id: 'reception',
      title: 'Reception',
      tamilTitle: 'Welcome Reception',
      dateText: 'Thursday, 29th October, 2026',
      timeText: 'From 6:00 PM onwards',
      timestamp: '2026-10-29T18:00:00+05:30',
      description: 'An evening of joy, melodious music, heartfelt wishes, and royal Tamil feast to welcome the new beginning of the couple.',
      icon: 'reception',
      auspiciousNote: 'Evening of Celebration & Royal Feast',
    },
    {
      id: 'marriage',
      title: 'Marriage',
      tamilTitle: 'Sacred Marriage Ceremony',
      dateText: 'Friday, 30th October, 2026',
      timeText: 'Between 6:00 AM and 7:30 AM',
      timestamp: '2026-10-30T06:00:00+05:30',
      description: 'The sacred Kalyanam and tying of the sacred Thaali in auspicious Subha Muhurtham with Vedic mantras and Nadaswaram.',
      icon: 'marriage',
      auspiciousNote: 'Auspicious Subha Muhurtham',
    },
  ],
  venue: {
    name: 'SVK MAHAL',
    city: 'Kavarapettai',
    fullAddress: 'SVK Mahal, GNT Road, Kavarapettai, Tiruvallur District, Tamil Nadu 601206',
    landmark: 'Near Kavarapettai Railway Station / GNT Highway',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=SVK+Mahal+Kavarapettai',
    embedMapUrl: 'https://maps.google.com/maps?q=SVK%20Mahal,%20Kavarapettai&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  countdown: {
    targetDate: '2026-10-30T06:00:00+05:30',
    title: 'Counting Down to Forever',
    subtitle: 'Until the sacred Kalyanam and tying of the sacred Thaali',
    completedMessage: 'The Sacred Kalyanam has arrived! Bless the couple on their eternal journey.',
  },
  music: {
    src: '/music/wedding_melody.mp3',
    title: 'Idhuthaanaa - Traditional Flute & Nadaswaram',
    artist: 'Tamil Classical Instrumental',
  },
  contact: {
    whatsappNumber: '+919597689450',
    rsvpMessage: 'Vanakkam! Hearty congratulations Santhosh and Akshaya on your sacred wedding! We are delighted to attend your Kalyanam at SVK Mahal, Kavarapettai. Wishing you both a lifetime of happiness, prosperity, and divine blessings!',
  },
  gallery: [
    {
      id: 'couple_divine',
      title: 'Sacred Bond of S & A',
      subtitle: 'Divine Tamil Couple in Royal Traditional Attire',
      category: 'The Couple',
      src: '/assets/gallery/couple_divine.webp',
    },
    {
      id: 'mandap',
      title: 'The Royal Mandap',
      subtitle: 'Fragrant Jasmine, Marigold & Glowing Brass Vilakkus',
      category: 'Decorations',
      src: '/assets/gallery/mandap.webp',
    },
    {
      id: 'rituals',
      title: 'Sacred Thaali & Betel Leaves',
      subtitle: 'Turmeric, Akshathai & Holy Muhurtham Fire',
      category: 'Rituals',
      src: '/assets/gallery/rituals.webp',
    },
    {
      id: 'temple',
      title: 'Temple Gopuram Blessings',
      subtitle: 'Spiritual Dravidian Architecture at Golden Sunrise',
      category: 'Heritage',
      src: '/assets/gallery/temple.webp',
    },
    {
      id: 'kolam',
      title: 'Auspicious Kolam & Diya',
      subtitle: 'Sacred Rice Flour Art & Fresh Lotus Blooms',
      category: 'Tradition',
      src: '/assets/gallery/kolam.webp',
    },
    {
      id: 'nadaswaram',
      title: 'Mangala Vaathiyam',
      subtitle: 'Soul-stirring Nadaswaram & Thavil Melodies',
      category: 'Culture',
      src: '/assets/gallery/nadaswaram.webp',
    },
    {
      id: 'kanjivaram',
      title: 'Kanjivaram Silk & Temple Jewels',
      subtitle: 'Rich Crimson Zari, Mango Mala & Jasmine Veni',
      category: 'Elegance',
      src: '/assets/gallery/kanjivaram.webp',
    },
    {
      id: 'uruli_lotus',
      title: 'Elephant Uruli of Prosperity',
      subtitle: 'Antique Brass Pedestal with Sacred Water Lotuses',
      category: 'Auspicious',
      src: '/assets/gallery/uruli_lotus.webp',
    },
  ],
};
