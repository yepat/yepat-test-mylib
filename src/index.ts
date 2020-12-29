// export const sum = (a: number, b: number) => {
//   if ('development' === process.env.NODE_ENV) {
//     console.log('boop');
//   }
//   return a + b;
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

  /**
   * name
   */
  public hello() {
    console.log('hello world')
  }


}
