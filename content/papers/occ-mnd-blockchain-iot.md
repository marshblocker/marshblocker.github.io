+++
title = 'One-Class Classifier for Malicious Node Detection in Blockchain-based IoT Networks'
date = 2023-01-01
weight = 0
summary = 'A system is proposed to secure IoT networks using blockchain and artificial intelligence.'
draft = false
+++

---

![Network Diagram](/network-diagram.png)

**Abstract** — Blockchain is being explored as a substitute for central servers in IoT networks to enhance security by mitigating the limitations of the traditional architecture. But blockchain- based IoT networks are still prone to malicious nodes, which are attacked nodes in the network that transmit inaccurate data. The field of malicious node detection in blockchain-based IoT networks remains an area that requires further exploration. Hence, in this paper, we propose a system that uses One-Class Classification (OCC) algorithms for malicious node detection in blockchain-based IoT networks. Our system includes a Sensor Retention Policy (SRP) that decides whether a sensor should be removed from the network through trust points mechanics. 3 different OCC algorithms were considered for the system: (1) One-Class Support Vector Machine (OCSVM), (2) OCSVM using Standard Gradient Descent (SGD-OCSVM), and (3) Local Outlier Factor (LOF). Different variations of the system were created by varying the decision threshold parameter of each algorithm (the values considered are 0.0, -0.15, and -0.30) and by also considering the system variation with no SRP. We devised a set of test runs to determine the performance of each system variation based on the following metrics: (1) Modified F-score, (2) Average Detection Time, (3) Average Processing Overhead, and (4) Memory Consumption. The test results show that using an OCSVM algorithm with a decision threshold of -0.30 provides the highest recorded modified F-score of 0.98. Compared to the other OCC algorithms, the OCSVM algorithm is the most efficient in terms of the modified F-score and average detection time trade-off. The OCSVM algorithm provides the lowest average processing overhead (1.6 ns) and the lowest memory consumption (27.46 KB) compared to other OCC algorithms.

---

_[Link to paper](/occ-mnd-blockchain-iot.pdf)_