// 给一个数字数组，返回数组中的两个元素相加等于target的下标
var twoSum = (nums, target) => {
    let arr = []
    nums.forEach((item, i, origin) => {
        let next = target - item;
        if (nums.indexOf(next) > 0) {
            arr = [nums.indexOf(next), i];
            return;
        }
    })
    return arr.length ? arr : null;
};
// twoSum([1, 5, 2, 3, 96, 15, 1], 15)

// 判断一个数是不是回文数， 121是 122不是 222是
const isPalindrome = (x) => {
        let str = x.toString().split('').reverse().join('');
        return +str == x
    }
    // let is = isPalindrome(100001)

// 找到中位数
const findMedianSortedArrays = (...args) => {
        const set1 = [...args.flat()];
        set1.sort((x, y) => {
            return x - y
        })
        if (set1.length % 2 == 1) {
            return Math.ceil(set1.length / 2);
        } else {
            return (set1[set1.length / 2 - 1] + set1[set1.length / 2]) / 2
        }
    }
    // let center = findMedianSortedArrays([1, 2], [3, 4, 5])

// 找到最长的没有重复的字串
const lengthOfLongestSubString = (s) => {
        let MAX_LEN = 0,
            SUB_STR = '';
        s = Array.from(s);

        for (let i = 0; i < s.length; i++) {
            help(i)
        }
        console.log(MAX_LEN, SUB_STR)

        function help(index) {
            if (index >= s.length - 1) {
                return;
            }
            let sub = '';
            let maxLenth = 0;
            for (let i = index; i < s.length; i++) {
                if (sub.includes(s[i])) {
                    break;
                } else {
                    sub += s[i];
                    maxLenth++;
                }
            }
            if (MAX_LEN < maxLenth) {
                MAX_LEN = maxLenth;
                SUB_STR = sub;
            }
        }
    }
    // lengthOfLongestSubString('金刚狼的爪子非常锋利')