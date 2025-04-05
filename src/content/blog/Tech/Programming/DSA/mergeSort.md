---
author: "Chris Carlin"
title: "Merge Sort"
description: "An overview of Merge Sort"
pubDate: "03/25/25"
draft: true
category: "Programming"
---

## What is it?

Merge sort is a not in-place sorting algorithm that divides the array into subarrays and then sorts and merges those subarrays in order to compile a sorted list. WTF does that mean?
Simply put, merge sort breaks it's original array into chunks until the individual subarrays contain only a single item. Those subarrays are then merged in order.

This is a good way to get a grasp on recursion as well as the 2-pointer problems that are all over leetcode.

## Time Complexity

Merge sort is pretty efficient as it has a worse case of O(n log n). This also happens to be the best case and average case of the algorithm.

## Space complexity

Since we require an array that is the same size as the original the space complexity of merge sort is O(n). 
Compare this to the O(log n) of quick sort and we can see the benefits of using an in-place sorting algorithm on space constrained systems. 
That being said, O(n) is not terrible considering the benefits of the time complexity and the fact that you can sort multiple subarrays at the same time. 

## How it works

## Diagrams

## Code Examples