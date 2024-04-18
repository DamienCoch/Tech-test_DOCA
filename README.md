# Tech-test_DOCA
Temporary repository to share js file for a technical test.
________________________________________

Pour ce test, j'ai tenté d'implémenter les algo de Trust Indexes depuis Banana-X, j'ai imaginé une implémentation du premier index : 'Veracity'.

Ma compréhension de cet index se résume dans mon algorithme à : 
- Augmenter l'index de confiance suivant le nombre de chaîne vérifiée.
- Baisser l'index suivant la longueur de chaque chaîne.

Les variables 'lengthImpact' et 'numberImpact' déterminent l'impact du nombre de chaînes et de leurs longueur sur l'index (l'adaptation de la variable α).

Pour le second index 'Transparency', j'ai compris le principe du 'node of interest' plus difficilement mais j'ai vu sa similarité avec des algorithmes de graphs,
J'ai donc développé un algorithme de calcul de centralité dans un graph, un "Betweenness centrality".

Le principe de cet algorithme est que plus une node est utilisée pour relier des plus court chemin, meilleur sera son score.

Je me suis basé sur la vidéo suivante afin de créer cet algo, l'image donne une représentation graphique du graph utilisé.

J'ai commencé avec un algorithme 'breadth first' afin de trouver tout les plus courts chemins.

Betweenness Centrality : https://www.youtube.com/watch?app=desktop&v=ptqt2zr9ZRE
![graph](/images/Betweenness_Algo.png)

Concernant les indexes 'Sementic' et 'Composability', le principe est encore une fois semblable à l'algorithme du premier index, mais de ma compréhension il y a besoin de données externes tels que l'importances des mots clés (on peux imaginer une liste de mots avec un score qui, si inclus, augmentent le score 'Sementic', idem avec les technos/environnements/outils utilisés pour le 'Composability'), je n'ai donc pas créé d'algo à cause du besoin de données extérieures.
