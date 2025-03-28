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

## Space complexity

## Diagrams

<p align="center>

![bubble sort](/public/blogContent/bubbleSort/Sorting_bubblesort_anim.gif) 

</p>

## Code Examples

``` JavaScript

function bubleSort(arr){
  for(let i = 0; i <= arr.length; i++){
    for(let j = 1; j <= arr.length; j++){
      if(arr[i] > arr[j]){
        let tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
      }
    }
  }
}
```