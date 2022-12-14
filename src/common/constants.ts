export const ENCODINGS = {
  ISO8859_1: 'ISO8859_1',
  ISO8859_2: 'ISO8859_2',
  ISO8859_4: 'ISO8859_4',
  ISO8859_5: 'ISO8859_5',
  ISO8859_7: 'ISO8859_7',
  ISO8859_9: 'ISO8859_9',
  ISO8859_13: 'ISO8859_13',
  ISO8859_15: 'ISO8859_15',
  KOI8_R: 'KOI8_R',
  ASCII: 'ASCII',
  UTF8: 'UTF8',
  UTF16: 'UTF-16',
  UnicodeBigUnmarked: 'UnicodeBigUnmarked',
  UnicodeLittleUnmarked: 'UnicodeLittleUnmarked',
  Cp1250: 'Cp1250',
  Cp1251: 'Cp1251',
  Cp1252: 'Cp1252',
  Cp1253: 'Cp1253',
  Cp1254: 'Cp1254',
  Cp1257: 'Cp1257',
  UnicodeBig: 'UnicodeBig',
  UnicodeLittle: 'UnicodeLittle',
} as const

export type EncodingType = keyof typeof ENCODINGS