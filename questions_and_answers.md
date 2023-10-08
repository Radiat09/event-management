<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details>
<summary><b>Answer: </b></summary>
<p>

#### Answer: "A:`{}`"

<i>Write your explanation here</i>
ans:
// Firstly the variable is decleared but it is undefined.when declearing the variable,"let" was used which lets any variable to change its value later. later the value was set and its new value is the empty object.
//

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:`C:"12"`

<i>Write your explanation here</i>
// the function will try to run the operation even if the data types are not same types.the function will concatenate the two values as strings because one of the value is string.

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:" A: `['🍕', '🍫', '🥑', '🍔']`"

<i>Write your explanation here</i>
// assigning the value of "food[0]" to "info.favoriteFood", the value is not creating a reference , it is just copying the value. So, reassigning "info.favoriteFood" does not change the food array.

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: `B: `Hi there, undefined``

<i>Write your explanation here</i>
// the function will retuen "Hi there, undefined" because there was no value passed when calling the function.when when we do not pass value through parameters it returns undefined.

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: "- C: 3"

<i>Write your explanation here</i>
// The loop starts with num equal to 0. in js, 0 is a falsy value, so the "if(num)" condition returns to false, and count stays 0. when the loop goes to the next element,that element "1" is a truthy value, so the "if(num)" condition returns to true, and count is incresed by 1. the loop continues with next num equal to 2. like 1 , 2 is also a truthy value, so count is incresed by another 1, making count = 2. Finally, the loop goes to the last element, whic is 3. again, 3 is a truthy value, so count is increased by 1, making count = 3.

</p>
</details>
