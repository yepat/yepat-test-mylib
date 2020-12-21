// export const sum = (a: number, b: number) => {
//   if ('development' === process.env.NODE_ENV) {
//     console.log('boop');
//   }
//   return a + b;
// };

// export const getTimer = (second: number) => {
//   if ('development' === process.env.NODE_ENV) {
//     console.log('boop');
//   }
//   if (second < 0) {
//     return '00:00:00'
//   }
//   let h = Math.floor(second / 3600)
//   let _h = h < 10 ? ('0' + h) : h
//   let m = Math.floor(second % 3600 / 60)
//   let _m = m < 10 ? ('0' + m) : m
//   let s = second % 60
//   let _s = s < 10 ? ('0' + s) : s
//   return _h + ":" + _m + ":" + _s
// };

/**
 *
 * 封装常用的函数方法
 *
 */
export default class MTBUtils {

  private static _instance: MTBUtils;
  public static getIns(): MTBUtils {
    if (!this._instance) {
      this._instance = new MTBUtils();
    }
    return this._instance;
  }

  /**
   * 两个数相加
   */
  public getSum(a: number, b: number): number {
    return a + b;
  }
}
