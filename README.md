# Titre du Projet
Autonomous Vehicles with Multi-Behavior System
# Description
Le présent projet se matérialise sous la forme d'une application interactive conçue au moyen du framework p5.js, un outil dédié à la création visuelle en ligne. Il s'agit d'une simulation interactive implémentant des comportements autonomes pour des véhicules virtuels.
 
## Fonctionnalités

 •	Gestion des Obstacles : Des obstacles sous format de circle .
 
![obstacle](https://github.com/douaafarissi/Game_IA_masterdouaa/blob/master/assets/images/pc.png)



![obstaclerouge](https://github.com/Fatima-ACHBAD/Game_AI/assets/100408189/d95b241e-c7dd-4f0d-ad78-7c8912cc3b62)

  # Vue globale :
![obstacle2](https://github.com/Fatima-ACHBAD/Game_AI/assets/100408189/5c23378a-647f-485f-a0bd-1c7ca6a6e928)

•	Suivre un leader: Les véhicules peuvent être configurés pour suivre un leader, en utilisant un comportement "arrive" appliqué dans la méthode "applyBehaviors"  pour se déplacer vers la position de la souris (gérer par la variable target) . 

![poursuite](https://github.com/Fatima-ACHBAD/Game_AI/assets/100408189/364829e8-96dc-4e9b-adcd-65a26ecad363)

"applyBehaviors"

![applyBehaviors](https://github.com/Fatima-ACHBAD/Game_AI/assets/100408189/cd9a3c3b-f11c-4a24-b6b7-8e66a2f8315d)


Un point derrière le leader est la cible des autres véhicules .
![pointvert](https://github.com/Fatima-ACHBAD/Game_AI/assets/100408189/a7f06758-0546-4eee-8151-4b720384b64e)


Ainsi qu’une distance est gardé entre les véhicules (gérer par separate qui prend en paramètre les véhicules) et avoid(obstacles) pour éviter les obtacles  .   v.applyBehaviors(vehiculePrecedent.pos, obstacles, vehicules, 40);

![followleader](https://github.com/Fatima-ACHBAD/Game_AI/assets/100408189/e281b8a5-c0f9-428c-ad62-f7abfeeb5497)

Enfin , comportement évasion quand on est dans la zone devant le leader .
Si la souris se met dans evasionZone on applique la force d'évasion à tous les véhicules, y compris le leader qui suit target (dans notre cas target est la souris )

![evasion](https://github.com/Fatima-ACHBAD/Game_AI/assets/100408189/2ba0a376-6a46-4d8c-b961-caa1942ced97)

Verification du comportement d'evasion .

![comportementevasion](https://github.com/Fatima-ACHBAD/Game_AI/assets/100408189/5ca64b86-4f26-4d97-9c32-b202f6e79093)

•	Serpent :  où les véhicules suivent le véhicule précédent .

![snake](https://github.com/Fatima-ACHBAD/Game_AI/assets/100408189/8dc19ae0-6fd5-4c2b-8417-bb9bdf3bbb63)

![snakegraphique](https://github.com/Fatima-ACHBAD/Game_AI/assets/100408189/e36ea2b9-b557-4fe1-b00e-843872eafcd8)

•	Wander : où les véhicules se déplacent de manière aléatoire.

![wander](https://github.com/Fatima-ACHBAD/Game_AI/assets/100408189/6f0f2919-ba03-48db-9863-e9e983c40cfd)

Il faut ajouter dans la classe Vehicle des variables pour ce comportement Wander et la méthode .

![classevehiculewander](https://github.com/Fatima-ACHBAD/Game_AI/assets/100408189/bae57ce1-983e-4c10-8dc8-935eb9d1c5c0)

![wandermethode](https://github.com/Fatima-ACHBAD/Game_AI/assets/100408189/9e129a3a-efb0-4be9-8617-9e33b8750d8a)

# Vue globale :

![wandergraphique](https://github.com/Fatima-ACHBAD/Game_AI/assets/100408189/2e8879de-3f44-490e-af5a-1fec8ca7676a)

--Curseurs pour régler les paramètres
![curseur](https://github.com/Fatima-ACHBAD/Game_AI/assets/100408189/6e24eff7-db0d-4fdc-a303-08d20ac9cd14)

Mettre à jour les valeurs des curseurs dans la méthode draw

![curseur2](https://github.com/Fatima-ACHBAD/Game_AI/assets/100408189/3862e50f-46a1-4895-ab61-0d7029a7ad47)

# Vue globale :

![curseurgraphique](https://github.com/Fatima-ACHBAD/Game_AI/assets/100408189/14b0dbf6-55da-4bd5-812e-10626b33c7b9)


•	Mode débogage : 
 Cette fonction est utilisée pour représenter graphiquement un vecteur associé à la vitesse d'un véhicule.

![drawVector](https://github.com/Fatima-ACHBAD/Game_AI/assets/100408189/fae9c21b-2ae8-450b-ad14-7032acf7fd7a)

Cette partie spécifique du code est utilisée pour dessiner une zone d'évitement devant un véhicule,stroke(255, 200, 0, 90) :Définit la couleur de la ligne de la zone d'évitement. 

![zeonejaune](https://github.com/Fatima-ACHBAD/Game_AI/assets/100408189/8c69c698-48e7-4aef-81e5-109b09fe716b)


 La fonction responsable du calcul de la force de pilotage d'un véhicule dans la simulation en tenant compte de divers facteurs tels que les obstacles, la vitesse maximale, et les alertes rouges en cas de proximité avec un obstacle.

![pilotage](https://github.com/Fatima-ACHBAD/Game_AI/assets/100408189/cafa8e6d-5430-4332-83f3-0e156d5f552d)

Le code est destinée à aider à déboguer en affichant visuellement le vecteur ahead en rouge, ainsi que deux  cercles à l'extrémité de ce vecteur pour visualiser la zone de freinage. Ces éléments visuels peuvent être utiles pour comprendre le comportement du véhicule, en particulier en ce qui concerne sa capacité à anticiper et à réagir aux obstacles.

![debugavoidvehicle](https://github.com/Fatima-ACHBAD/Game_AI/assets/100408189/f00f02f2-74f9-4d26-ab18-7bdf04590d86)

#Vue globale:

![debuggraphique](https://github.com/Fatima-ACHBAD/Game_AI/assets/100408189/be35af6c-eb2b-45a3-970a-aac0716fcbf2)


•	Interaction Utilisateur : Les utilisateurs peuvent interagir avec l'environnement en déplaçant une cible à l'aide de la souris. 

![mouse](https://github.com/Fatima-ACHBAD/Game_AI/assets/100408189/b1fdd60e-d952-486c-923a-8d63447064c2)

Ils peuvent également basculer entre différents modes en utilisant les touches du clavier.

![keypressed](https://github.com/Fatima-ACHBAD/Game_AI/assets/100408189/b23451e4-bdbc-45d5-b528-84aa964b2f0d)

## Instructions d'utilisation

Simulateur de comportements de véhicules autonomes! Utilisez les touches du clavier pour interagir avec le programme.

- **"v"** : Ajouter un nouveau véhicule à la position de la souris.
- **"d"** : Activer/Désactiver le mode de débogage (affichage des vecteurs).
- **"a"** : Créer 5 véhicules se déplaçant du bord gauche de l'écran vers la souris.
- **"s"** : Activer le mode "Snake" - Les véhicules suivent le précédent.
- **"p"** : Activer le mode "Poursuite" - Un véhicule poursuit la position de la souris et la cible qui a un point vert                 derière .
- **"w"** : Activer le mode "Wander" - Un véhicule se déplace de manière aléatoire.

Cliquez sur l'écran pour ajouter des obstacles à la position de la souris.

---
 Amusez-vous bien!









