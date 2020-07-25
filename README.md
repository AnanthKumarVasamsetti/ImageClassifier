# Image classifier
This is an image classifier to identify objects present in a given picture. Currently it is able to identify dogs and cats in a given picture.

## Getting started
This classifier in built using convolutional neural networks(CNNs) to identify whether the animal in the given picture is a **Dog** (or) a **Cat**. 
The architecture of the CNN is a built using conventional alogrithms like **ReLu** and **Softmax**
It is designed in a such a way so that regardless of the resolution and visibility it can be able to identify the animal correctly

**Dataset length:** 25,000 images for both the classes combined
**Training accuracy:** 98% (rounded)
**Testing accuracy:** 84% (rounded)

### WebFrameworks used:
The whole application is built using ***Flask*** and frameworks like ***bootstrap*** and ***ajax***

### ML libraries used:
The classifier is built using ***Tensorflow***, ***keras***, ***NumPy*** and ***Theano***

### Examples
The following are some of the working examples of single page image classifier application

```
Basic example with lot of noise in the background
```
![Dog image 1](/UI%20layout/image%201.png)

```
Cats lot of them
```
![Cat image 1](/UI%20layout/image%202.png)

As you can see here there is a noise and multiple entites in the picture also resolutions are varied too

```
Let's test with some text
```
![Cat image 2](/UI%20layout/image%203.png)

```
Some with a blurry background just to add some detailing
```
![Dog image 2](/UI%20layout/image%204.png)

```
Some which are bit obstructed with objects
```
![Dog image 3](/UI%20layout/image%205.png)
![Cat image 3](/UI%20layout/image%206.png)