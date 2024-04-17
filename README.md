# Tech-test_DOCA
Temporary repository to share js file for a technical test.
________________________________________

Pour ce test, j'ai tenté d'implémenter les algo de Trust Indexes depuis Banana-X, j'ai imaginé une implémentation du premier index : 'Veracity'.

Ma compréhension de cet index se résume dans mon algorithme à : 
- Augmenter l'index de confiance suivant le nombre de chaîne vérifiée.
- Baisser l'index suivant la longueur de chaque chaîne.

Les variables 'lengthImpact' et 'numberImpact' déterminent l'impact du nombre de chaînes et de leurs longueur sur l'index (l'adaptation de la variable α).


Cependant, malgré ma compréhension des indexes suivants, je n'ai pu développer d'autres algos se basant sur ceux-ci,
j'ai donc développé un algo classique de calcul de centralité dans un graph, un "Betweenness centrality".

Je me suis basé sur la vidéo suivante afin de créer cet algo, l'image donne une représentation graphique du graph utilisé. 

Betweenness Centrality : https://www.youtube.com/watch?app=desktop&v=ptqt2zr9ZRE
![graph](/images/Betweenness_Algo.png)
