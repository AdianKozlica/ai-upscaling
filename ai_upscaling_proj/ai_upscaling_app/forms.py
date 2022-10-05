from django import forms

class ImageForm(forms.Form):
    image = forms.ImageField()
    scale = forms.IntegerField(initial=4)
