#fruit = 'framboise'
#quantite = 7
#print(fruit, quantite, sep="-")

#nuages = ["Cumulus", "Stratus", "Cirrus", "Cumulonimbus", "Altocumulus"]

#for list in nuages :
    #print(list)

#list = ["difficile", "hardcore", "ciao", "bye"]
#def felix_en_galere(list) :
   # for mots in list :
  #      print(mots)
 #   return None
#felix_en_galere(list)

import pandas as pd 

df = pd.read_csv ('test.csv')

print(df.head(20))
