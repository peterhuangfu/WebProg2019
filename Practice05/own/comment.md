# 完整度
80% （進階功能 % 和 +/- 和 . 沒有做）

# 正確性
100%

# 優點
1. 有自己改css

# 建議
1. setState 一次可以更新多個 state，如果有多個 state 需要更新的話不需要分成多個 setState。
2. 建議可以多分一點函式，增加可讀性。如按數字和按運算符號可以分成兩個不同函式，它們兩個並不會互相影響。
3. children 指的是兩個 tag 中間的所有東西，所以其實不用特別傳 children="1" 過去，寫 `<CalcButton className="calc-number" onClick={this.calcu}>1</CalcButton>`就好。
