export interface NewsTextStructure {
  id: number
  text1a: number
  text1b: string
  text1c: string
  text2a: number
  text2b: string
  text2c: string
  text3a: number
  text3b: string
  text3c: string
  text4a: number
  text4b: string
  text4c: string
  section: string
}

export const newsText: NewsTextStructure[] = [
  {
    id: 0,
    text1a: 326,
    text1b: 'emergency projects',
    text1c: 'reached 8.7 million people in 29 countries',
    text2a: 6,
    text2b: 'major appeals',
    text2c: 'launched, and maintained, to form emergency responses',
    text3a: 10.2,
    text3b: 'million individuals',
    text3c: 'received life-saving food aid, including over 2 million monthly in yemen',
    text4a: 132.6,
    text4b: '£132.6 million',
    text4c: 'spent supporting people affected by and recovering from disasters',
    section: "Saving lives"
  },  
  {
    id: 1,
    text1a: 4.6,
    text1b: '4.6 million lives changed',
    text1c: 'through 334 development projects',
    text2a: 91.900,
    text2b: 'orphaned children',
    text2c: 'supported through sponsorship',
    text3a: 2.8,
    text3b: 'million people',
    text3c: 'benefited from health care interventions',
    text4a: 967.000,
    text4b: '967,000 individuals',
    text4c: 'have improved access to water, sanitation and hygiene services',
    section: 'Empowering communities'
  },
  {
    id: 2,
    text1a: 1.4,
    text1b: '£1.4 million',
    text1c: 'spent on campaigning for positive change challenges',
    text2a: 205.200,
    text2b: '205,200 people',
    text2c: 'supported to adapt to climate change challenges',
    text3a: 1,
    text3b: '1 toolkit',
    text3c: 'produced on campaigning around 16 Days of Activism against Gender-Based Violence',
    text4a: 40,
    text4b: '40 partnerships',
    text4c: 'enabled us to reach even more people in need',
    section: 'Advocating for change'
  },
]