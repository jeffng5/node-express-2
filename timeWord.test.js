const { literalTime } = require('./timeWord');

// describe('#timeword', () => {
//   test('it is a function', () => {
//     expect(typeof timeWord()).toBe('function');
//   });
// });



describe('program translates times', () => {
  test('should equal midnight', () => {
    let ans = literalTime('00:00')
    expect(ans).toEqual('midnight');
  })

  test("should equal one o'clock am", () => {
    let ans = literalTime('01:00')
    expect(ans).toEqual("one o'clock am") 
  })

  test("should equal one o'clock am", () => {
    let ans = literalTime('01:00')
    expect(ans).toEqual("one o'clock am") 
  })

  test("should equal six eighteen am", () => {
    let ans = literalTime('06:18')
    expect(ans).toEqual("six eighteen am") 
  })

  test("should equal noon", () => {
    let ans = literalTime('12:00')
    expect(ans).toEqual("noon") 
  })

  test("should equal twelve oh nine pm", () => {
    let ans = literalTime('12:09')
    expect(ans).toEqual("twelve oh nine pm") 
  })

  test("should equal eleven twenty three pm", () => {
    let ans = literalTime('23:23')
    expect(ans).toEqual("eleven twenty three pm") 
  })

  test("should equal four pm", () => {
    let ans = literalTime('16:00')
    expect(ans).toEqual("four o'clock pm") 
  })
})