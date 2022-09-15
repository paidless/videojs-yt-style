/**
 * Check two language is not same.
 *
 * @param     {string} needToCompare
 *            Language need to compare.
 *
 * @param     {string} compareLang
 *            Compare with language.
 *
 * @return    {boolean}
 *            Return the compared result.
 */
export const isLangMatched = (needToCompare, compareLang) => { // eslint-disable-line no-unused-vars
  const [aLang, bLang] = [needToCompare.toLowerCase(), compareLang.toLowerCase()];

  if (aLang === bLang) {
    return true;
  }
  if (aLang === bLang.split('-').at(0)) {
    return true;
  }
  return false;
};
