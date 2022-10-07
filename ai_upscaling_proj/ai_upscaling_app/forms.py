from django import forms

class ImageForm(forms.Form):
    image = forms.ImageField()
    scale = forms.IntegerField(
            initial=4,
            min_value=1,
            max_value=5,
            widget=forms.NumberInput(attrs={"type":"range"})
        )
