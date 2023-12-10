# Titre du Projet
Game IA obctales and vehicules 
# Description
Le présent projet se matérialise sous la forme d'une application interactive conçue au moyen du framework p5.js, un outil dédié à la création visuelle en ligne. Il s'agit d'une simulation interactive implémentant des comportements autonomes pour des véhicules virtuels.
 
## Fonctionnalités

 •	Gestion des Obstacles : Des obstacles sous format de circle .
 
![ia1](https://github.com/douaafarissi/Game_IA_masterdouaa/assets/102305869/0cb9d331-c021-4640-bb07-98194bf2f7ac)

![Capture d'écran 2023-12-10 220417ddd2](https://github.com/douaafarissi/Game_IA_masterdouaa/assets/102305869/76390d9e-3b7f-4a0f-94a5-0fe30a6e8c73)

  # Vue globale :
  
![hh](https://github.com/douaafarissi/Game_IA_masterdouaa/assets/102305869/9b90e4c7-a0cc-4794-a921-bfd5f250f8ee)

•	Suivre un leader: Les véhicules peuvent être configurés pour suivre un leader, en utilisant un comportement "arrive" appliqué dans la méthode "applyBehaviors"  .

![aa](https://github.com/douaafarissi/Game_IA_masterdouaa/assets/102305869/dcffbf28-d0fd-4c36-a5ee-34a6b53796ce)

"applyBehaviors"

![go](https://github.com/douaafarissi/Game_IA_masterdouaa/assets/102305869/d841d256-c5c5-49a0-9e81-6841f2567b35)



Un point derrière le leader est la cible des autres véhicules .
![lll](https://github.com/douaafarissi/Game_IA_masterdouaa/assets/102305869/c2f5be43-4364-4655-81aa-0dec7f7069a4)


Ainsi qu’une distance est gardé entre les véhicules (gérer par separate qui prend en paramètre les véhicules) et avoid(obstacles) pour éviter les obtacles  . 

![pink](https://github.com/douaafarissi/Game_IA_masterdouaa/assets/102305869/40d2c8aa-cd9a-4585-a575-0bf4e2e78f43)


•	Serpent :  où les véhicules suivent le véhicule précédent .

![se](https://github.com/douaafarissi/Game_IA_masterdouaa/assets/102305869/80249438-7998-4f6a-b273-fde191f8405a)

•	Wander : où les véhicules se déplacent de manière aléatoire.

![wander](https://github.com/douaafarissi/Game_IA_masterdouaa/assets/102305869/bcbb5486-2f3a-44f7-935e-3531741fc372)

Il faut ajouter dans la classe Vehicle des variables pour ce comportement Wander et la méthode .
![ve](https://github.com/douaafarissi/Game_IA_masterdouaa/assets/102305869/c7292739-23ab-4184-a199-d10a2d5179f8)


![ww](https://github.com/douaafarissi/Game_IA_masterdouaaa/assets/102305869/dd0611af-46c4-436e-bcc0-299bbd2e6af6)
# Vue globale :

![jj](https://github.com/douaafarissi/Game_IA_masterdouaa/assets/102305869/0243905e-6b7d-442a-9d3c-e074e8726af1)

--Curseurs pour régler les paramètres
![mm](https://github.com/douaafarissi/Game_IA_masterdouaa/assets/102305869/f0be32a2-3a2d-4405-a3a4-a141127dfe11)

# Vue globale :

![pp](https://github.com/douaafarissi/Game_IA_masterdouaa/assets/102305869/e2753039-57f1-4c9d-8d94-c1d533fd3aef)

•	Mode débogage : 

 La fonction responsable du calcul de la force de pilotage d'un véhicule dans la simulation en tenant compte de divers facteurs tels que les obstacles, la vitesse maximale, et les alertes rouges en cas de proximité avec un obstacle.

Le code est destinée à aider à déboguer en affichant visuellement le vecteur ahead en rouge, ainsi que deux  cercles à l'extrémité de ce vecteur pour visualiser la zone de freinage. Ces éléments visuels peuvent être utiles pour comprendre le comportement du véhicule, en particulier en ce qui concerne sa capacité à anticiper et à réagir aux obstacles.

![Capture d'écran 2023-12-10 22402099999](https://github.com/douaafarissi/Game_IA_masterdouaa/assets/102305869/d1bc8df9-449d-4177-a67c-ff467ebb08a4)


#Vue globale:
![deb](https://github.com/douaafarissi/Game_IA_masterdouaa/assets/102305869/da1ee265-3f63-49d3-8c3b-029919d06d0c)




•	Interaction Utilisateur : Les utilisateurs peuvent interagir avec l'environnement en déplaçant une cible à l'aide de la souris. 


Ils peuvent également basculer entre différents modes en utilisant les touches du clavier.

![Capture d'écran 2023-12-10 2242255555555](https://github.com/douaafarissi/Game_IA_masterdouaa/assets/102305869/904f037a-396d-4e15-8f91-1d859ae97df1)

## Instructions d'utilisation



- **"v"** : Ajouter un nouveau véhicule à la position de la souris.
- **"d"** : Activer/Désactiver le mode de débogage (affichage des vecteurs).
- **"k"** : Créer  véhicules se déplaçant du bord gauche de l'écran vers la souris.
- **"s"** : Activer le mode "Snake" - Les véhicules suivent le précédent.
- **"p"** : Activer le mode "Poursuite" - Un véhicule poursuit la position de la souris  .
- **"w"** : Activer le mode "Wander" - Un véhicule se déplace de manière aléatoire.

Cliquez sur l'écran pour ajouter des obstacles à la position de la souris.










