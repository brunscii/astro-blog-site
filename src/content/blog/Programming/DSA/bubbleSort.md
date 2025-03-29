---
author: "Chris Carlin"
title: "Bubble Sort"
description: "An overview of Bubble Sort"
pubDate: "02/27/25"
draft: true
---

## What is bubble sort?

Bubble sort is one of the simplest sorting algorithms and is rarely used in the real world.
But I thought simplicity is desired in algorithms? Yeah, and so is efficiency. 
Bubble sort is not the fastest with a O(n<sup>2</sup>) time complexity.

So, what are the advantages?

For any type of sorting you have to do, there is almost always a better sorting algorithm out there. This one, however, is a good one to learn just to learn the basics of algorithms.


## Time complexity

Bubble sort has an average and worst case time complexity of O(n<sup>2</sup>). If for whatever reason the list is already sorted, then the time complexity is O(n) with 0 swaps. 

## Space complexity

The space complexity of bubble sort is O(1). It is constant as you only need enough extra space to store the temporary value from the list long enough to perform the swap. 

## Diagrams

<p align="center>

![bubble sort](/astro-blog-site/bubbleSort/Sorting_bubblesort_anim.gif) 

</p>

## Code Examples

``` JavaScript

//JavaScript
function bubbleSort(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j <= arr.length-1; j++){
      if(arr[j] > arr[j+1]){
        let tmp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = tmp
      }
    }
  }
  return arr
}

```

```JavaScript

//slightly uglier JavaScript
function bubbleSort(arr){
  for(let i = 0; i < arr.length; i++)
    for(let j = 0; j <= arr.length-1; j++)
      if(arr[j] > arr[j+1])
        [arr[j], arr[j+1]] = [arr[j+1],arr[j]]
  return arr
}

```
