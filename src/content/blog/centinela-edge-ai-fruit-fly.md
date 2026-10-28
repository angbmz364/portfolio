---
title: "Centinela: Detecting the South American Fruit Fly with Edge AI"
description: "ML model that detects Anastrepha fraterculus in trap photos and alerts farmers via Discord — running offline on a Raspberry Pi."
publishDate: 2026-10-14
tags: ["Machine Learning", "AI", "Agriculture", "Edge Computing", "Computer Vision"]
draft: true
---

## The Problem

The South American fruit fly (*Anastrepha fraterculus*) causes 15-30% annual crop losses in my country, with up to 45% infestation rates in citrus fruits — that's $2 million+ in losses for a single Valencia orange region.

Centinela detects the fly in camera trap photos and alerts the farmer the moment a plague is detected — all running offline on a Raspberry Pi 4.

## How It Works

1. A camera captures images of the sticky traps used by agricultural monitoring stations
2. A MobileNetV3-small model (with transfer learning on the frozen backbone) classifies whether *A. fraterculus* is present
3. If confidence exceeds 75%, a Discord webhook alert fires to the farmer

## Build Highlights

- **Transfer learning** on MobileNetV3-small, frozen backbone, 30 epochs
- **Custom field trap photos** to bridge the "lab-perfect but field-fail" gap — the Dryad dataset alone gave misleadingly perfect scores
- **99.01% test accuracy**, 98.80% sensitivity on the merged dataset (4,041 images)
- **Full pipeline**: collect data → prepare splits → train → validate → evaluate → alert
- **Edge deployment**: runs on Raspberry Pi 4 with no internet required

## Lessons Learned

Lab test perfection isn't a good signal. When I first used the public Dryad dataset, the model scored near 100% — but failed miserably on real-world trap photos. I engineered specialized traps for my zone, collected 93 whole-fly photos from iNaturalist and Wikimedia Commons, and merged them with the lab data. The model then generalized correctly to field conditions.

## Try It

View on GitHub: [github.com/angbmz364/centinela](https://github.com/angbmz364/centinela)

The repo includes the full training pipeline, dataset preparation scripts, and a Discord alerting system (`python alert/alert.py path/to/image.jpg`).
