/**
 * Say you have multiple versions of a program, write a program that will find and return the first bad revision given a isBad(version) function.

Versions after first bad version are supposed to be all bad versions.

notes

Inputs are all non-negative integers
if none found, return -1
Source for this   https://www.glassdoor.com/Interview/If-you-have-500-revisions-of-a-program-write-a-program-that-will-find-and-return-the-FIRST-bad-revision-given-a-isBad-revi-QTN_1255475.htm

 */

/*
 type TypIsBad = (version: number) => boolean
 */

/**
 * @param {TypIsBad} isBad
 */
function firstBadVersion(isBad) {
  // firstBadVersion receive a check function isBad
  // and should return a closure which accepts a version number(integer)
  return (version) => {
    // write your code to return the first bad version
    // if none found, return -1
    // binary search
    let left = 1,
      right = version;
    let mid;
    while (left < right) {
      mid = parseInt((left + right) / 2);
      if (isBad(mid)) right = mid;
      else left = mid + 1;
    }
    if (isBad(left)) return left;
    return -1;
  };
}

// Note use binary search
