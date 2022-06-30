//Bài 1:
//Đầu vào: "Hello"
var str = "Hello"
function a(str){
 var uplow = str.charAt(0).toLowerCase() + str.slice(1).toUpperCase()
 return uplow
}
console.log(a(str))
//Trả về: "hELLO"



//Bài 2:
//Đầu vào: [32, "abc", true, 65]
var arr2 = [32, "abc", true, 65]
function random(arr2){
    var rand = arr2[Math.floor(Math.random() * arr2.length)]
    return rand
}
console.log(random(arr2))
//Trả về: true
//Trả về: 65
//Trả về: 32
//Trả về: "abc"



//Bài 3:
//Đầu vào: 12
//Trả về: “Trưa"
//--------------------
//Đầu vào: 6
//Trả về: “Sáng"
function time(hour){
     0 < hour && hour <= 24
    if(0 < hour && hour <10){
        return ("Sáng")
    }
    else if (10 <= hour && hour <= 12) {
        return ("Trưa")
    }
    else if (12 < hour && hour <18) {
        return ("Chiều")
    }
    else {
        return ("Tối")
    }
}
console.log(time(10))




//Bài 4:
//Đầu vào: [1, 3, 2, 8, 4, 5]
var arr4=[1, 3, 2, 8, 4, 5]
function max(arr4){
     let max = arr4[0]
     for (let i = 1; i < arr4.length; i++)
     if (max < arr4[i])
         max = arr4[i];
         return max
}
console.log(max(arr4)) 

function min(arr4){
    let min = arr4[0]
    for (let i = 1; i < arr4.length; i++)
    if (min > arr4[i])
        min = arr4[i];
        return min
}
console.log(min(arr4))

function sum(arr4){
    var tong=0
    for (let i = 0; i < arr4.length; i++)
    tong+=arr4[i]
    return tong
}
console.log(sum(arr4))
//Trả về: { max: 8, min: 1, sum: 23 }



//Bài 5:
//Đầu vào: 1221
//Đầu ra: true
//--------------------
//Đầu vào: 123
//Trả về: false
//--------------------
//Đầu vào: 123321
//Trả về: true
//--------------------
//Đầu vào: 12321
//Trả về: true
//--------------------
//Đầu vào: 3
//Trả về: true
function DaoNguoc(value){
    var boo = (value === +value.toString().split("").reverse().join("")) 
    return boo
}
console.log(DaoNguoc(123321))



//Bài 6:
//Đầu vào: ngang: 3, cao: 3
//Trả về:	0 0 0
//	0 0 0
// 	0 0 0
//--------------------
//Đầu vào: ngang: 2, cao: 5
//Trả về: 0 0
//	0 0
//	0 0
//	0 0
//	0 0
//--------------------
//Đầu vào: ngang: 0, cao: 3
//Trả về: Width or height can not equal 0



//Bài 7:
//Đầu vào: [1, …, 32, 33, 34, 35, 35, 36, …, 99] (dấu ba chấm viết tắt cho các số tăng dần lần lượt)
//Trả về: 35
//--------------------
//Đầu vào: [1, …, 22, 23, 23, 24, 25, …, 99]
//Trả về: 23
arr7 = [1, 22, 23, 23, 24, 25, 99]
function laplai(arr7){
        for (let i = 0; i < arr7.length - 1; ++i) {
        for (let j = i + 1; j < arr7.length; ++j) {
            if (arr7[i] == arr7[j]){
                return arr7[i]
            }}}
}
console.log(laplai(arr7))



//Bài 8:
//Đầu vào: [1,[2,3,null,4],[null],5]
var arr8 = [1,[2,3,null,4],[null],5]
function flat(arr8){
    kq = arr8.flat().filter(arr8 => arr8 != null)
    return kq 
}
console.log(flat(arr8))
//Trả về: [1,2,3,4,5]



//Bài 9:
//Đầu vào: chuỗi: “49142”, số: 3
//Trả về: [“491”, “914”, “142”]
//--------------------
//Đầu vào: chuỗi: “1234567”, số: 5
//Trả về: [“12345”, “23456”, “34567”]
//--------------------
//Đầu vào: chuỗi: “5242”, số: 6
//Trả về: [“5242”]
