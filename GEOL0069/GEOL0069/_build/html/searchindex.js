Search.setIndex({"docnames": ["Chapter 1:AI_Algorithms", "Chapter 1:IRIS", "Chapter 1:ML", "Chapter 1:Preparation", "Chapter 1:Sea-ice_and_Lead_Classification", "Chapter 1:rollout", "Chapter2:Intro to Gaussian Processes", "Chapter2:Optimal_Interpolation", "Chapter2:Practical_Applications", "References1", "intro", "markdown", "markdown-notebooks", "notebooks"], "filenames": ["Chapter 1:AI_Algorithms.ipynb", "Chapter 1:IRIS.ipynb", "Chapter 1:ML.ipynb", "Chapter 1:Preparation.ipynb", "Chapter 1:Sea-ice_and_Lead_Classification.ipynb", "Chapter 1:rollout.ipynb", "Chapter2:Intro to Gaussian Processes.ipynb", "Chapter2:Optimal_Interpolation.ipynb", "Chapter2:Practical_Applications.ipynb", "References1.ipynb", "intro.md", "markdown.md", "markdown-notebooks.md", "notebooks.ipynb"], "titles": ["AI/Machine Learning Implementation", "Introduction to Intelligently Reinforced Image Segmentation (IRIS)", "Introduction to AI/Machine Learning", "Preparation", "Sea-ice and Lead Classification", "Roll-out on a Full Image", "Introduction to Gaussian Processes", "Introduction to Optimal Interpolation", "Applications of Gaussian Processes on Optimal Interpolation", "References", "Welcome to GEOL0069 AI for Earth Observation", "&lt;no title&gt;", "Notebooks with MyST Markdown", "Content with notebooks"], "terms": {"interact": [0, 2, 4, 5, 13], "version": [0, 2, 4, 5], "For": [0, 1, 2, 3, 4, 5, 6, 13], "hand": [0, 2, 4, 5], "experi": [0, 2, 4, 5], "thi": [0, 1, 2, 3, 4, 5, 6, 12, 13], "chapter": [0, 1, 2, 3, 4, 5, 6], "s": [0, 2, 3, 4, 5, 6, 12, 13], "content": [0, 2, 3, 4, 5, 12], "access": [0, 2, 3, 4, 5], "notebook": [0, 2, 3, 4, 5], "googl": [0, 2, 4, 5], "colab": [0, 2, 4, 5], "In": [0, 1, 2, 3, 4, 5, 6, 9], "section": [0, 4], "we": [0, 1, 2, 3, 4, 5, 6], "delv": [0, 2], "applic": [0, 1, 2, 4, 6], "promin": 0, "algorithm": [0, 2, 6], "dataset": [0, 1, 2, 5], "curat": 0, "preced": 0, "while": [0, 1, 2, 6], "an": [0, 1, 2, 3, 4, 5, 6, 9], "exhaust": 0, "comprehens": [0, 6], "isn": 0, "t": [0, 2, 4, 5, 6, 13], "mandatori": [0, 1], "grasp": 0, "underli": [0, 2, 6], "principl": [0, 2], "confid": [0, 6], "The": [0, 1, 3, 4, 5, 6, 12], "main": [0, 4, 6], "task": [0, 1, 2, 3, 6], "focu": 0, "becaus": [0, 2, 4], "ar": [0, 1, 3, 4, 6, 12], "do": [0, 1, 4, 13], "surfac": [0, 4], "discrimin": [0, 2], "come": 0, "across": [0, 1, 4, 5], "regress": [0, 6], "futur": [0, 1, 6], "from": [0, 1, 2, 3, 5, 6, 13], "previou": [0, 1, 2, 4], "you": [0, 1, 2, 3, 4, 5, 6, 12, 13], "should": [0, 1, 3, 4, 12], "have": [0, 1, 2, 3, 4, 6, 12], "your": [0, 1, 3, 4, 5, 12, 13], "train": [0, 1, 4, 5, 6], "test": [0, 3, 4, 5], "readi": [0, 1, 4], "import": [0, 2, 3, 5, 13], "os": [0, 4], "x_train": [0, 4], "np": [0, 2, 4, 5, 13], "path": [0, 1, 4, 12], "join": [0, 4], "save_path": [0, 4], "x_train_balanc": [0, 4], "npy": [0, 4], "x_test": [0, 4], "x_test_balanc": [0, 4], "y_train": [0, 4], "y_train_balanc": [0, 4], "y_test": [0, 4], "y_test_balanc": [0, 4], "commonli": 0, "known": [0, 2, 6], "class": [0, 1, 4], "special": [0, 1], "design": [0, 1], "process": [0, 1, 4, 5, 9], "like": [0, 1, 2, 3, 4, 6, 12], "topolog": 0, "gbc16": [0, 9], "lbh15": [0, 9], "origin": [0, 1, 3, 4, 5], "visual": [0, 4, 5], "cortex": 0, "biolog": 0, "revolutionis": 0, "wai": [0, 1, 2, 3, 4, 6], "understand": [0, 4, 6, 12], "interpret": [0, 2, 6], "when": [0, 1, 2, 4, 12], "suffer": 0, "two": [0, 1, 2, 4, 6, 12], "issu": [0, 1], "too": [0, 4], "mani": [0, 6, 12], "paramet": [0, 2, 6], "simpl": [0, 2, 6], "256x256": 0, "color": [0, 2, 13], "input": [0, 2, 4, 5, 6], "layer": 0, "would": [0, 2, 4], "256": 0, "196": 0, "608": 0, "neuron": 0, "lead": [0, 1, 2, 5], "enorm": 0, "number": [0, 2, 4, 5, 6], "even": [0, 2], "first": [0, 4], "hidden": 0, "loss": 0, "inform": [0, 4, 6, 9, 12, 13], "flatten": [0, 4], "vector": [0, 6], "can": [0, 1, 2, 3, 4, 5, 6, 12, 13], "lose": [0, 2], "pattern": [0, 2, 4, 5, 6, 9], "which": [0, 1, 2, 3, 4, 6, 12], "often": [0, 2, 6], "crucial": [0, 2, 4, 5, 6], "address": [0, 4], "both": [0, 1, 4, 6], "introduc": [0, 2, 3], "core": [0, 6, 10], "build": 0, "block": [0, 4, 12], "It": [0, 2, 3, 4, 6], "slide": [0, 3], "filter": 0, "smaller": [0, 4], "size": [0, 1, 2, 4, 5], "than": 0, "over": [0, 2, 4, 6], "produc": [0, 1], "map": [0, 2, 5], "convolv": 0, "primari": [0, 2], "purpos": 0, "extract": [0, 4, 5], "pool": 0, "reduc": [0, 2], "dimens": [0, 4, 5], "therebi": 0, "comput": [0, 2, 6], "most": [0, 2, 6], "common": [0, 2, 6], "type": [0, 3, 6], "max": 0, "fulli": 0, "connect": [0, 3, 6], "after": [0, 1], "sever": [0, 2, 4, 6], "final": 0, "done": [0, 4], "one": [0, 1, 2, 3, 4], "more": [0, 1, 2, 4, 6, 12, 13], "all": [0, 1, 2, 3, 4, 12], "activ": [0, 4], "seen": [0, 6], "regular": 0, "function": [0, 1, 5], "non": [0, 2, 3, 6], "linear": [0, 2, 4, 6], "rectifi": 0, "unit": [0, 5], "relu": 0, "automat": 0, "initi": [0, 2, 4, 6], "might": [0, 1, 2, 6], "detect": [0, 4], "edg": 0, "next": [0, 4, 6], "shape": [0, 2, 4, 5], "combin": [0, 4, 6], "further": [0, 1, 2, 4, 5], "complex": [0, 1, 2, 6], "structur": [0, 2, 3, 4, 5, 6], "abil": [0, 2], "raw": [0, 1, 2, 4], "give": [0, 6], "power": [0, 2, 6], "allow": [0, 1, 2, 3, 6], "them": [0, 2, 4], "object": [0, 2], "simpler": 0, "earlier": 0, "share": [0, 3], "A": [0, 1, 2, 5], "detector": [0, 4], "part": [0, 1, 4], "anoth": [0, 4, 6], "ksh12": [0, 9], "sparsiti": 0, "each": [0, 1, 2, 4, 5, 6], "output": [0, 1, 2, 4, 5, 6, 12], "valu": [0, 2, 4, 6], "depend": [0, 1, 2, 6], "onli": [0, 1, 2, 4], "small": 0, "make": [0, 1, 2, 3, 4, 5, 6, 13], "effici": [0, 1, 4], "below": [0, 1, 2, 3, 4, 5], "ll": [0, 1, 3], "find": [0, 1, 2, 3, 4], "tensorflow": 0, "treat": [0, 12], "blueprint": 0, "subsequ": [0, 1, 4], "tf": 0, "kera": 0, "defin": [0, 2, 4, 6, 12], "sequenti": 0, "add": [0, 3, 4], "conv2d": 0, "32": [0, 9], "input_shap": 0, "64": [0, 4, 5], "maxpooling2d": 0, "addit": [0, 5], "need": [0, 1, 2, 3, 4, 5, 6, 12], "dens": 0, "10": [0, 2, 9, 13], "softmax": 0, "compil": 0, "optim": [0, 6], "adam": [0, 2], "sparse_categorical_crossentropi": 0, "metric": [0, 2, 6], "accuraci": [0, 4, 6], "fit": [0, 2], "epoch": 0, "validation_data": 0, "x_val": 0, "y_val": 0, "notabl": 0, "signific": [0, 2], "also": [0, 1, 2, 4, 12, 13], "its": [0, 2, 4], "preval": 0, "so": [0, 4, 12], "let": [0, 4, 5, 6, 12], "concept": [0, 10], "bre01": [0, 9], "qui86": [0, 9], "method": [0, 2, 6, 9], "emploi": [0, 6], "multipl": [0, 4, 9], "achiev": 0, "better": [0, 2], "predict": [0, 2, 5, 6], "perform": [0, 1, 2, 6], "ani": [0, 2, 3, 4, 6, 12], "individu": 0, "alon": 0, "die00": [0, 9], "behind": 0, "weak": 0, "learner": 0, "togeth": [0, 6], "form": [0, 4, 6], "strong": 0, "central": [0, 2], "thei": [0, 4, 6], "split": [0, 2, 4], "subset": [0, 2], "base": [0, 1, 2, 3, 4, 6, 12], "recurs": 0, "leverag": [0, 1], "where": [0, 1, 2, 3, 4, 6], "creat": [0, 1, 2, 3, 13], "draw": 0, "sampl": [0, 2, 4, 13], "replac": [0, 1, 4], "separ": [0, 4], "built": [0, 2, 12], "bre96": [0, 9], "convent": 0, "chosen": [0, 6], "everi": [0, 2], "node": 0, "howev": [0, 2], "set": [0, 1, 3, 4, 5, 6], "choos": [0, 1, 2, 3, 6], "ensur": [0, 1, 4], "divers": 0, "generalis": 0, "By": [0, 1, 5], "tend": 0, "gener": [0, 1, 2, 3, 5, 6], "less": [0, 4], "suscept": 0, "overfit": 0, "parallel": 0, "independ": [0, 2], "speed": 0, "up": [0, 1, 3, 4], "consider": 0, "larg": [0, 4], "handl": [0, 2, 4, 6], "miss": [0, 2], "still": 0, "reason": [0, 4], "score": [0, 2], "provid": [0, 1, 2, 3, 4, 6], "aid": 0, "sklearn": [0, 2, 4], "randomforestclassifi": 0, "initialis": [0, 5, 6], "n_estim": 0, "specifi": [0, 4, 6], "clf": 0, "100": [0, 1, 2, 4, 13], "reshap": [0, 4, 5], "order": 0, "compat": [0, 5], "x_reshap": 0, "0": [0, 1, 2, 4, 5, 6, 13], "x_test_reshap": 0, "y_pred": [0, 5], "recent": 0, "breakthrough": 0, "field": [0, 2], "depart": 0, "approach": 0, "appli": [0, 5, 6], "were": [0, 2], "natur": [0, 6, 9], "languag": 0, "instead": [0, 1, 4, 6], "divid": [0, 4], "fix": [0, 13], "patch": [0, 4, 5], "linearli": 0, "emb": [0, 13], "result": [0, 2, 4], "sequenc": 0, "token": 0, "dbk": [0, 9], "20": [0, 9], "sinc": [0, 2], "doesn": [0, 2, 5], "notion": 0, "rel": 0, "ad": [0, 1, 2], "retain": [0, 2, 5], "consist": [0, 1, 5], "multi": 0, "self": 0, "attent": 0, "mechan": 0, "feed": [0, 4], "forward": 0, "through": [0, 2, 3, 5, 6], "refer": [0, 2, 10], "cl": 0, "classifi": [0, 1, 5, 9], "transfer": 0, "pre": 0, "fine": [0, 2], "tune": [0, 2, 6], "high": [0, 4, 6], "avail": [0, 2], "label": [0, 1, 2, 4], "limit": 0, "scalabl": 0, "hungri": 0, "compar": 0, "continu": [0, 6], "improv": [0, 2], "amount": [0, 4], "increas": [0, 1, 2], "surpass": 0, "other": [0, 3, 6, 9, 12], "flexibl": [0, 2, 6], "potenti": [0, 2, 4], "vari": [0, 4, 5], "demand": 0, "computation": 0, "intens": 0, "especi": [0, 2, 5, 6], "deal": 0, "ha": [0, 1, 2, 4], "requir": [0, 1, 5, 6], "To": [0, 1, 3, 6], "implment": 0, "much": [0, 6], "complic": 0, "librari": [0, 6], "follow": [0, 1, 2, 3, 4, 6, 12], "some": [0, 1, 2, 4, 13], "exist": [0, 2, 4], "muliti": 0, "don": [0, 4], "know": [0, 2], "exactli": 0, "detail": [0, 1, 2, 4, 12], "cours": [0, 3], "pleas": [0, 1, 4], "exampl": [0, 1, 2, 4, 5, 13], "instal": [0, 4], "packag": [0, 4], "pip": 0, "u": 0, "addon": 0, "numpi": [0, 1, 2, 4, 5, 13], "tensorflow_addon": 0, "tfa": 0, "accuracy_scor": 0, "confusion_matrix": 0, "classification_report": 0, "def": [0, 5], "mlp": 0, "x": [0, 2, 4, 5, 6], "hidden_unit": 0, "dropout_r": 0, "nn": 0, "gelu": 0, "dropout": 0, "return": [0, 5], "__init__": 0, "patch_siz": 0, "super": 0, "call": [0, 5], "batch_siz": [0, 5], "extract_patch": 0, "stride": 0, "rate": [0, 2], "pad": 0, "patch_dim": 0, "patchencod": 0, "num_patch": 0, "projection_dim": 0, "project": [0, 1, 3, 5], "position_embed": 0, "input_dim": 0, "output_dim": 0, "rang": [0, 4, 5, 13], "start": [0, 1, 3, 6, 12], "delta": 0, "encod": 0, "create_vit_classifi": 0, "augment": 0, "data_augment": 0, "encoded_patch": 0, "_": 0, "transformer_lay": 0, "normal": [0, 2, 6], "x1": [0, 4], "layernorm": 0, "epsilon": 0, "1e": 0, "6": 0, "attention_output": 0, "multiheadattent": 0, "num_head": 0, "key_dim": 0, "skip": 0, "x2": [0, 4], "x3": 0, "transformer_unit": 0, "tensor": 0, "represent": [0, 6], "5": [0, 2, 4, 9, 13], "mlp_head_unit": 0, "logit": 0, "num_class": [0, 4], "run_experi": 0, "adamw": 0, "learning_r": 0, "weight_decai": 0, "sparsecategoricalcrossentropi": 0, "from_logit": 0, "true": [0, 4], "sparsecategoricalaccuraci": 0, "name": [0, 3, 4], "sparsetopkcategoricalaccuraci": 0, "top": [0, 1, 4, 5, 12], "checkpoint_filepath": 0, "tmp": 0, "checkpoint": 0, "checkpoint_callback": 0, "callback": 0, "modelcheckpoint": 0, "monitor": [0, 4], "val_accuraci": 0, "save_best_onli": 0, "save_weights_onli": 0, "histori": 0, "y": [0, 2, 4, 5, 6], "30": 0, "validation_split": 0, "load_weight": 0, "top_5_accuraci": 0, "evalu": [0, 2, 6], "print": [0, 4, 5, 12], "f": [0, 1, 2, 4, 6], "round": 0, "chang": [0, 1, 2, 3, 4], "21": [0, 2, 4, 5], "want": [0, 4, 5, 13], "001": 0, "0001": 0, "num_epoch": 0, "image_s": 0, "72": 0, "8": 0, "2048": 0, "1024": 0, "more_data": 0, "resiz": 0, "ima_s": 0, "randomflip": 0, "horizont": 0, "randomrot": 0, "factor": [0, 4, 5], "02": 0, "randomzoom": 0, "height_factor": 0, "width_factor": 0, "adapt": [0, 2, 6], "here": [0, 1, 3, 4, 5, 13], "pivot": [0, 4], "robust": 0, "our": [0, 1, 4, 5, 6], "just": [0, 2, 4, 5, 6], "memoris": 0, "well": [0, 2, 13], "new": [0, 2, 3, 4], "unseen": [0, 2], "nuanc": 0, "between": [0, 2, 4, 6], "procedur": 0, "dure": 0, "particularli": [0, 1, 6], "incorpor": [0, 6], "earli": 0, "stop": 0, "anneal": 0, "etc": [0, 13], "due": 0, "time": [0, 1, 4, 6], "singl": [0, 4], "hold": [0, 1], "out": [0, 1, 13], "sometim": 0, "few": [0, 4], "differ": [0, 1, 2, 4, 5, 6], "specif": [0, 1, 2, 4, 5, 6], "hyperparamet": [0, 2, 6], "involv": [0, 2, 3, 5, 6], "bayesian": 0, "dedic": 0, "optuna": 0, "rai": 0, "standard": [0, 4], "techniqu": [0, 2, 9], "typic": [0, 2, 6], "faster": 0, "estim": [0, 2, 6], "e": [0, 4, 5, 9], "g": [0, 5, 9], "gridsearchcv": 0, "despit": 0, "trend": [0, 6], "worth": [0, 9], "note": [0, 1, 3, 6], "resourc": 0, "permit": 0, "similarli": 0, "iter": [0, 2, 4], "gradient": [0, 2], "boost": 0, "choic": [0, 2, 3, 4, 6], "reli": 0, "actual": [0, 1, 2, 4], "includ": [0, 2, 3, 4, 6, 12, 13], "check": [0, 4, 13], "contain": [0, 1, 4, 5], "randomli": [0, 4], "partit": 0, "equal": [0, 5], "Of": 0, "remain": [0, 4], "repeat": 0, "onc": [0, 1, 2], "averag": [0, 6], "cv": 0, "model_select": [0, 4], "cross_val_scor": 0, "assum": [0, 4], "mean": [0, 2, 13], "popular": [0, 3], "space": [0, 6], "hypothet": 0, "param_grid": 0, "50": 0, "150": 0, "max_depth": 0, "none": 0, "grid_search": 0, "best_params_": 0, "best_score_": 0, "throughout": 1, "extens": [1, 2], "utilis": 1, "user": [1, 3], "friendli": 1, "web": [1, 3], "flask": 1, "develop": 1, "esa": 1, "philab": 1, "thank": 1, "alistair": 1, "franci": 1, "whose": 1, "guidanc": 1, "been": 1, "instrument": [1, 5], "indispens": [1, 2], "workflow": [1, 2, 4], "ground": [1, 4], "truth": 1, "data": [1, 3, 5, 6, 9, 13], "machin": [1, 3, 4, 5, 6, 9, 10], "learn": [1, 3, 4, 5, 6, 9, 10], "Its": 1, "intuit": 1, "click": [1, 3], "greatli": 1, "simplifi": 1, "accur": [1, 2], "earth": [1, 2], "observ": [1, 2, 4, 6], "enhanc": 1, "capabl": [1, 2, 5], "creation": 1, "repo": 1, "direct": [1, 12], "github": 1, "repositori": 1, "consum": 1, "manual": 1, "configur": [1, 2], "setup": [1, 5, 6], "easili": 1, "deploi": 1, "container": 1, "environ": [1, 3], "elimin": 1, "manag": [1, 4], "reproduc": [1, 13], "execut": [1, 3, 12], "deploy": 1, "portabl": 1, "behaviour": [1, 2], "ideal": 1, "solut": [1, 2], "look": 1, "streamlin": 1, "hassl": 1, "free": [1, 3], "befor": [1, 2, 3, 4], "place": 1, "platform": 1, "window": 1, "maco": 1, "linux": 1, "offici": 1, "guid": [1, 6, 13], "oper": 1, "system": [1, 4, 9], "desktop": 1, "engin": [1, 2], "http": [1, 9], "doc": [1, 3], "com": 1, "get": [1, 3, 4, 12], "account": [1, 3], "option": [1, 3], "If": [1, 2, 3, 12], "plan": 1, "hub": 1, "mai": [1, 2, 4, 9], "antiviru": 1, "secur": [1, 4], "devic": [1, 3], "interfer": 1, "case": [1, 4, 6], "encount": 1, "try": [1, 2], "open": [1, 3, 4], "command": [1, 12], "resolv": 1, "temporarili": 1, "disabl": 1, "list": [1, 3, 4, 5], "trust": 1, "complet": 1, "proce": 1, "step": [1, 2, 4, 6], "termin": 1, "prompt": 1, "totony4r": 1, "1": [1, 2, 3, 4, 5, 6, 9, 13], "wait": 1, "download": [1, 2], "progress": 1, "di": 1, "plai": [1, 3, 4, 5], "successfulli": 1, "interfac": [1, 4], "toi": [1, 6], "file": [1, 3, 4, 5, 12], "config": 1, "p": [1, 2], "80": 1, "5000": 1, "v": 1, "path_to_data": 1, "rm": 1, "json": [1, 4], "directori": [1, 3, 4, 5], "save": [1, 3, 4, 5], "see": [1, 4, 12, 13], "appear": 1, "password": 1, "own": [1, 3], "browser": [1, 3], "navig": [1, 3, 4], "localhost": 1, "link": [1, 3], "ask": 1, "127": 1, "upon": 1, "greet": 1, "simpli": 1, "registr": 1, "button": [1, 3], "screen": 1, "shown": 1, "At": [1, 4], "point": [1, 3, 6], "usernam": 1, "prefer": 1, "fill": 1, "regist": 1, "redirect": 1, "begin": [1, 13], "session": 1, "tip": 1, "pencil": 1, "tool": [1, 2, 3, 6, 9], "paint": 1, "pixel": [1, 4, 5], "anywher": 1, "within": [1, 3, 4], "rectangular": 1, "region": [1, 4, 5], "mark": 1, "red": [1, 2], "dot": 1, "line": [1, 2, 12, 13], "zoom": 1, "mous": 1, "scroll": 1, "wheel": 1, "finger": 1, "swipe": 1, "down": 1, "touchpad": 1, "adjust": [1, 2, 4, 6], "accord": 1, "cursor": 1, "shift": 1, "kei": [1, 2, 6], "action": 1, "decreas": [1, 6], "desir": [1, 2], "classif": [1, 5, 6, 9], "finish": 1, "show": [1, 2, 4, 5, 12], "drawn": 1, "displai": [1, 4, 12], "locat": [1, 3, 4], "page": [1, 12], "same": 1, "folder": [1, 3, 4], "abl": 1, "correspond": [1, 2, 4, 6], "arrai": [1, 2, 4, 5, 13], "analysi": [1, 3, 4, 6], "As": [1, 13], "previous": 1, "mention": 1, "consequ": 1, "practic": [1, 9], "benefici": 1, "those": 1, "sub": 1, "3": [1, 2, 4, 5], "total": 1, "area": [1, 5], "coordin": [1, 5], "400": [1, 4], "300": [1, 4], "700": 1, "challeng": [1, 5], "partial": 1, "cloud": [1, 3], "1000": 1, "1300": 1, "upload": [1, 3], "submiss": 1, "scienc": [2, 3], "focus": 2, "vital": [2, 4], "evolv": 2, "significantli": 2, "conceptu": 2, "coin": 2, "arthur": 2, "samuel": 2, "1959": 2, "ml": 2, "wa": 2, "describ": [2, 3], "without": [2, 3], "being": [2, 4, 6], "explicitli": 2, "program": 2, "year": 2, "grown": 2, "exponenti": 2, "propel": 2, "advanc": [2, 6, 9], "todai": 2, "analyz": [2, 4], "recogn": 2, "remark": 2, "These": [2, 4, 6], "made": 2, "numer": 2, "help": [2, 4], "analys": [2, 4], "satellit": [2, 4], "imageri": [2, 4], "climat": [2, 4], "compris": 2, "stage": 2, "success": 2, "essenti": [2, 4, 6], "anyon": 2, "definit": 2, "collect": [2, 6], "clearli": 2, "re": [2, 3, 4], "solv": [2, 6], "constraint": 2, "impact": 2, "major": 2, "discuss": 2, "sea": [2, 5], "ic": [2, 5], "cornerston": 2, "gather": 2, "necessari": [2, 3, 6], "relev": 2, "qualiti": [2, 4], "quantiti": [2, 4], "varieti": 2, "influenc": [2, 4, 6], "imag": [2, 4, 9, 10, 13], "olci": [2, 5], "us": [2, 4, 6, 12], "mostli": 2, "publicli": 2, "availbel": 2, "onlin": 2, "preprocess": 2, "clean": 2, "format": [2, 4, 5, 6], "convert": [2, 4, 5, 12], "normalis": 2, "featur": [2, 4, 6], "iri": [2, 10], "select": [2, 3, 6], "attribut": 2, "band": [2, 4, 5], "discard": 2, "redund": 2, "appropri": [2, 6], "characterist": [2, 6], "outcom": [2, 6], "determin": [2, 6], "precis": 2, "recal": 2, "f1": 2, "invov": 2, "tweak": 2, "distinguish": 2, "variat": 2, "goal": [2, 6], "classic": 2, "recognit": [2, 9], "categor": 2, "python": [2, 3], "code": [2, 3, 4, 5, 12], "matplotlib": [2, 4, 5, 13], "pyplot": [2, 4, 5, 13], "plt": [2, 4, 5, 13], "linear_model": 2, "linearregress": 2, "2": [2, 4, 5, 6, 9, 12], "4": [2, 4, 9, 13], "scatter": 2, "blue": 2, "plot": [2, 4, 13], "titl": 2, "xlabel": 2, "ylabel": 2, "work": [2, 3, 6, 13], "seek": 2, "identifi": [2, 4, 6], "inher": 2, "cluster": 2, "group": 2, "similar": [2, 6], "instanc": [2, 4], "segment": [2, 5, 10], "custom": 2, "market": 2, "purchas": 2, "habit": 2, "k": [2, 6], "kmean": 2, "random": [2, 4, 6, 9, 13], "rand": 2, "n_cluster": 2, "y_kmean": 2, "c": 2, "cmap": [2, 13], "viridi": 2, "center": [2, 4], "cluster_centers_": 2, "black": 2, "200": [2, 4], "alpha": 2, "akin": 2, "student": 2, "who": 2, "memor": 2, "fact": 2, "fail": 2, "happen": 2, "thoroughli": 2, "captur": [2, 4, 6], "nois": [2, 6], "anomali": [2, 4], "thu": [2, 4], "becom": 2, "excel": 2, "imagin": [2, 6], "cat": 2, "photo": 2, "irrelev": 2, "background": 2, "poorli": 2, "occur": 2, "variabl": [2, 4, 5, 6], "unabl": 2, "decis": [2, 6, 9], "hasn": 2, "enough": 2, "relationship": [2, 6], "straight": 2, "wildli": 2, "curv": 2, "illustr": 2, "degre": 2, "polynomi": 2, "situat": 2, "n": [2, 13], "th": 2, "nonlinear": 2, "curvatur": 2, "synthet": 2, "seed": [2, 13], "linspac": [2, 13], "sin": [2, 6], "pi": [2, 4, 5, 6], "scale": [2, 6, 9], "25": 2, "consid": 2, "9": [2, 4], "figur": [2, 5], "figsiz": [2, 13], "14": 2, "i": [2, 4, 5], "enumer": [2, 4], "coef": 2, "poly1d": 2, "x_poli": 2, "y_poli": 2, "subplot": [2, 13], "bo": 2, "r": 2, "m": [2, 5, 6, 9], "ylim": 2, "legend": [2, 13], "tight_layout": 2, "obviou": 2, "But": [2, 4, 13], "certain": 2, "level": 2, "cost": 2, "quantifi": [2, 6], "how": [2, 4, 6, 12], "far": 2, "off": [2, 4, 12], "given": 2, "deviat": 2, "higher": 2, "minim": 2, "effect": 2, "squar": 2, "error": 2, "cross": 2, "entropi": 2, "neural": [2, 9], "network": [2, 9], "weight": 2, "descent": 2, "stochast": 2, "sgd": 2, "moment": [2, 4], "teach": 2, "valid": 2, "meaning": 2, "seri": 3, "undertak": 3, "short": 3, "colaboratori": 3, "servic": 3, "write": [3, 12], "offer": [3, 4, 6], "equip": 3, "gpu": 3, "freindli": 3, "excecut": 3, "sure": [3, 4, 13], "go": [3, 5], "run": [3, 4, 12], "cell": 3, "icon": 3, "sidebar": 3, "enabl": 3, "runtim": 3, "hardwar": 3, "acceler": 3, "dropdown": 3, "mount": 3, "store": [3, 4, 5], "assess": [3, 4], "copi": 3, "log": 3, "url": 3, "app": 3, "menu": 3, "instructor": 3, "right": [3, 6], "context": [3, 6], "altern": 3, "my": 3, "directli": 3, "easi": 3, "organ": 3, "drag": 3, "move": 3, "organis": [3, 6], "expect": [3, 6], "welcom": 3, "could": [3, 6], "doubl": 3, "jupyt": [3, 12, 13], "snippet": 3, "authent": 3, "login": 3, "flow": 3, "view": [3, 4, 5], "edit": [3, 5], "abov": [3, 4], "integr": [3, 4], "sheet": 3, "document": [3, 12, 13], "narrow": 4, "fractur": 4, "broken": 4, "movement": 4, "water": 4, "stress": 4, "induc": 4, "wind": 4, "temperatur": 4, "meter": 4, "kilomet": 4, "width": [4, 5], "extend": [4, 6], "hundr": 4, "role": [4, 5], "polar": 4, "marin": 4, "ecosystem": 4, "dynam": 4, "put": 4, "heat": 4, "exchang": 4, "act": 4, "gatewai": 4, "moistur": 4, "momentum": 4, "atmospher": [4, 5], "weather": 4, "life": 4, "variou": [4, 6], "speci": 4, "air": 4, "breath": 4, "anim": 4, "seal": 4, "serv": 4, "bear": 4, "human": 4, "rout": 4, "remot": 4, "carbon": 4, "cycl": 4, "contribut": 4, "uptak": 4, "co2": 4, "global": 4, "state": [4, 13], "art": 4, "spectromet": 4, "aboard": 4, "sentinel": 4, "resolut": 4, "optic": 4, "distinct": [4, 5], "visibl": 4, "infrar": 4, "spectrum": 4, "geograph": 4, "veget": 4, "health": 4, "cover": [4, 6], "environment": 4, "primarili": 4, "nativ": 4, "netcdf4": [4, 5], "imper": 4, "transform": [4, 5, 9], "delin": 4, "exercis": 4, "main_folder_path": 4, "respons": 4, "main_fold": 4, "end": [4, 13], "sen3": 4, "d": [4, 12], "listdir": 4, "isdir": 4, "endswith": 4, "loop": [4, 5], "found": 4, "construct": [4, 6], "olci_file_p": [4, 5], "current": 4, "track": 4, "load": [4, 5], "instrument_data": [4, 5], "nc": [4, 5], "insid": 4, "about": [4, 12, 13], "solar_flux": [4, 5], "solar": [4, 5], "flux": [4, 5], "detector_index": [4, 5], "index": 4, "tie": [4, 5], "geometri": [4, 5], "tie_geometri": [4, 5], "angl": [4, 5], "sza": [4, 5], "zenith": [4, 5], "save_directori": 4, "makedir": 4, "radianc": [4, 5], "repres": [4, 6], "wavelength": 4, "olci_data": 4, "22": [4, 5], "There": [4, 13], "rstr": 4, "02d": [4, 5], "solar_flux_band": 4, "olci_nc": 4, "oa": [4, 5], "_radianc": [4, 5], "radiance_valu": 4, "asarrai": [4, 5], "calcul": [4, 5, 6], "zeros_lik": 4, "int": [4, 5], "bidirect": [4, 5], "reflect": [4, 5], "toa": [4, 5], "brf": [4, 5], "toa_brf": [4, 5], "co": [4, 5], "radian": [4, 5], "append": [4, 5], "nanmin": 4, "nanmax": 4, "reshaped_arrai": 4, "moveaxi": [4, 5], "chunk": 4, "along": 4, "second": 4, "split_arrai": 4, "array_split": 4, "axi": [4, 5], "portion": 4, "arr": 4, "chunk_": 4, "_band_": 4, "One": 4, "thing": [4, 12], "wide": 4, "therefor": 4, "take": [4, 6], "netcdf": [4, 5], "fron": 4, "now": [4, 6], "instruct": [4, 12], "mask": 4, "outlin": 4, "aim": 4, "orgini": 4, "usual": [4, 6], "thge": 4, "left": [4, 6], "bottom": 4, "y1": 4, "y2": 4, "cv2": 4, "train_test_split": 4, "drive": 4, "mydriv": 4, "research": 4, "data_project": 4, "olci_test": 4, "olci_images3": 4, "datadir": 4, "chunk_3": 4, "mask_area": 4, "interest": 4, "roi": 4, "read": 4, "imread": 4, "cpom_iri": 4, "png": 4, "imread_unchang": 4, "rgb": 4, "channel": 4, "binari": 4, "binary_mask": 4, "worthi": 4, "care": 4, "align": [4, 13], "channel_1": 4, "rgb_imag": 4, "stack": 4, "imshow": [4, 5], "around": 4, "height": [4, 5], "exclud": 4, "border": 4, "j": [4, 9], "patches_arrai": [4, 5], "59004": 4, "becasu": 4, "avoid": 4, "inconsisit": 4, "trim": 4, "boundari": 4, "trimmed_mask": 4, "1d": 4, "sci": 4, "kit": 4, "test_siz": 4, "random_st": 4, "42": 4, "imbal": 4, "skew": 4, "compromis": 4, "balanc": 4, "equival": 4, "reliabl": [4, 6], "equit": 4, "comparison": 4, "abandom": 4, "ones": 4, "examin": 4, "present": [4, 5], "uniqu": 4, "count": 4, "return_count": 4, "dict": 4, "zip": 4, "9396": 4, "49608": 4, "indic": [4, 6], "indices_class_0": 4, "indices_class_1": 4, "sampled_indices_class_0": 4, "fals": 4, "combined_indic": 4, "concaten": 4, "balanced_patch": 4, "balanced_label": 4, "ratio": 4, "8440": 4, "8472": 4, "until": 4, "entir": 5, "realm": 5, "opportun": 5, "Such": 5, "stretch": 5, "larger": 5, "capac": 5, "correctli": 5, "pyproj": 5, "math": [5, 13], "wgs84": 5, "eas": 5, "grid": 5, "wgs84toease2": 5, "lon": 5, "lat": 5, "proj_ease2": 5, "proj": 5, "laea": 5, "lon_0": 5, "lat_0": 5, "90": 5, "x_0": 5, "y_0": 5, "ellp": 5, "towgs84": 5, "no_def": 5, "proj_wgs84": 5, "longlat": 5, "datum": 5, "path_to_data_fold": 5, "geoloc": 5, "geo_coordin": 5, "latitud": 5, "longitud": 5, "oa01": 5, "band_oa01": 5, "oa01_radi": 5, "solar_flux_band_oa01": 5, "nx": 5, "ny": 5, "q": 5, "bandnumb": 5, "band_oa_temp": 5, "column": 5, "row": 5, "zero": [5, 6], "dtype": 5, "float32": 5, "float": 5, "3x3": 5, "extract_patches_2d": 5, "x_test_al": 5, "phase": 5, "respect": 5, "categori": 5, "sai": 5, "250": 5, "y_pred1": 5, "argmax": 5, "map1": 5, "pathches_arrai": 5, "inspect": 5, "juxtapos": 5, "against": 5, "discern": 5, "aptitud": 5, "intrins": 5, "spatial": 5, "alter": 5, "inlin": 5, "mpl": 5, "rcparam": [5, 13], "dpi": 5, "600": 5, "manner": 5, "filenam": 5, "lambert": 5, "azimuth": 5, "folder_nam": 5, "lustr": 5, "home": 5, "zcakwc1": 5, "03": 5, "model1": 5, "gp": 6, "close": 6, "relat": 6, "interpol": 6, "oi": 6, "statist": 6, "model": 6, "finit": 6, "joint": 6, "distribut": 6, "problem": 6, "root": 6, "treatment": 6, "uncertainti": 6, "probabilist": 6, "essenc": 6, "idea": 6, "broader": 6, "sophist": 6, "correl": 6, "versatil": 6, "scenario": 6, "unknown": 6, "hard": 6, "term": 6, "li": 6, "rightarrow": 6, "tell": 6, "matric": 6, "deriv": 6, "graphic": 6, "notat": 6, "mathbf": 6, "x_1": 6, "ldot": 6, "x_n": 6, "matrix": 6, "element": 6, "fundament": 6, "behavior": 6, "measur": 6, "radial": 6, "basi": 6, "rbf": 6, "exp": 6, "frac": 6, "2l": 6, "l": 6, "length": 6, "Their": 6, "suit": 6, "smooth": 6, "control": 6, "rapidli": 6, "distanc": 6, "period": 6, "express": 6, "affect": 6, "maximum": 6, "likelihood": 6, "default": [6, 12], "necessit": 6, "explan": 6, "denot": 6, "assumpt": 6, "although": 6, "prior": 6, "sigma": 6, "2_ni": 6, "2_n": 6, "suggest": 6, "low": 6, "caution": 6, "forecast": 6, "best": 6, "guess": 6, "duo": 6, "risk": 6, "sensit": 6, "thoes": 6, "prepar": [6, 10], "suitabl": 6, "target": 6, "maxim": 6, "under": 6, "posterior": 6, "rmse": 6, "mae": 6, "auc": 6, "refin": 6, "retrain": 6, "ve": 6, "dive": 6, "explor": 6, "implement": [6, 9], "gpytorch": 6, "bn06": 9, "christoph": 9, "bishop": 9, "nasser": 9, "nasrabadi": 9, "volum": 9, "springer": 9, "2006": 9, "leo": 9, "breiman": 9, "bag": 9, "predictor": 9, "24": 9, "123": 9, "140": 9, "1996": 9, "forest": 9, "45": 9, "2001": 9, "thoma": 9, "dietterich": 9, "ensembl": 9, "15": 9, "2000": 9, "alexei": 9, "dosovitskii": 9, "luca": 9, "beyer": 9, "alexand": 9, "kolesnikov": 9, "dirk": 9, "weissenborn": 9, "xiaohua": 9, "zhai": 9, "unterthin": 9, "mostafa": 9, "dehghani": 9, "matthia": 9, "minder": 9, "georg": 9, "heigold": 9, "sylvain": 9, "gelli": 9, "16x16": 9, "word": 9, "arxiv": 9, "preprint": 9, "2010": 9, "11929": 9, "2020": 9, "ian": 9, "goodfellow": 9, "yoshua": 9, "bengio": 9, "aaron": 9, "courvil": 9, "deep": 9, "mit": 9, "press": 9, "2016": 9, "www": 9, "deeplearningbook": 9, "org": 9, "alex": 9, "krizhevski": 9, "ilya": 9, "sutskev": 9, "geoffrei": 9, "hinton": 9, "imagenet": 9, "convolut": 9, "2012": 9, "yann": 9, "lecun": 9, "521": 9, "7553": 9, "436": 9, "444": 9, "2015": 9, "doi": 9, "1038": 9, "nature14539": 9, "ross": 9, "quinlan": 9, "induct": 9, "tree": 9, "81": 9, "106": 9, "1986": 9, "wf02": 9, "h": 9, "witten": 9, "eib": 9, "frank": 9, "mine": 9, "java": 9, "acm": 9, "sigmod": 9, "record": 9, "31": 9, "76": 9, "77": 9, "2002": 9, "introduct": 10, "intellig": 10, "reinforc": 10, "book": [12, 13], "text": 12, "written": 12, "With": 12, "kernel": 12, "rest": 12, "jupytext": 12, "support": 12, "presenc": 12, "That": 12, "init": 12, "markdownfil": 12, "md": 12, "html": 13, "post": 13, "add_": 13, "mbox": 13, "la_": 13, "tex": 13, "escap": 13, "dollar": 13, "sign": 13, "keep": 13, "cycler": 13, "ion": 13, "19680801": 13, "logspac": 13, "randn": 13, "ii": 13, "cm": 13, "coolwarm": 13, "ax": 13, "prop_cycl": 13, "line2d": 13, "custom_lin": 13, "lw": 13, "fig": 13, "cold": 13, "medium": 13, "hot": 13, "lot": 13}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"ai": [0, 2, 10], "machin": [0, 2], "learn": [0, 2], "implement": 0, "load": 0, "data": [0, 2, 4], "convolut": 0, "neural": 0, "network": 0, "cnn": 0, "introduct": [0, 1, 2, 5, 6, 7], "why": [0, 1], "imag": [0, 1, 5], "kei": 0, "compon": 0, "how": [0, 1], "spatial": 0, "hierarchi": 0, "advantag": 0, "basic": [0, 6, 7], "code": [0, 8, 13], "random": 0, "forest": 0, "theoret": 0, "foundat": 0, "1": [0, 10], "ensembl": 0, "2": 0, "decis": 0, "tree": 0, "3": 0, "bootstrap": 0, "aggreg": 0, "bag": 0, "4": 0, "featur": 0, "python": [0, 7, 8], "us": [0, 1, 3], "scikit": 0, "vision": 0, "transform": 0, "vit": 0, "tokenis": 0, "posit": 0, "embed": 0, "architectur": 0, "classif": [0, 2, 4], "head": 0, "challeng": 0, "model": [0, 2, 5], "select": 0, "cross": 0, "valid": 0, "deep": 0, "tradit": 0, "ml": 0, "overlap": 0, "best": 0, "practic": [0, 6], "what": [0, 2], "bn06": [0, 2], "k": 0, "fold": 0, "grid": 0, "search": 0, "intellig": [1, 2], "reinforc": 1, "segment": 1, "iri": [1, 4], "instal": 1, "docker": 1, "access": 1, "prerequisit": 1, "pull": 1, "run": 1, "reus": 1, "mask": 1, "exercis": 1, "week": 1, "guidelin": 1, "artifici": 2, "ar": 2, "thei": 2, "understand": 2, "process": [2, 6, 8], "chain": [2, 6], "The": 2, "lifecycl": 2, "project": 2, "wf02": 2, "core": 2, "concept": [2, 6], "type": 2, "supervis": 2, "unsupervis": 2, "regress": 2, "overfit": 2, "underfit": 2, "peril": 2, "too": 2, "much": 2, "problem": [2, 8], "oversimplif": 2, "loss": 2, "function": [2, 6], "optim": [2, 7, 8], "gaug": 2, "accuraci": 2, "steer": 2, "train": 2, "set": 2, "test": 2, "partit": 2, "prepar": [3, 5], "googl": 3, "colab": 3, "step": 3, "drive": 3, "sea": 4, "ic": 4, "lead": 4, "intro": 4, "definit": [4, 6], "import": 4, "ocean": 4, "land": 4, "colour": 4, "instrument": 4, "olci": 4, "preprocess": 4, "note": 4, "creat": [4, 12], "dataset": 4, "from": 4, "roll": 5, "out": 5, "full": 5, "applic": [5, 8], "displai": 5, "result": 5, "gaussian": [6, 8], "overview": [6, 7], "mathemat": [6, 7], "framework": [6, 7], "covari": 6, "kernel": 6, "mean": 6, "varianc": 6, "A": 6, "logic": 6, "exampl": [6, 7, 12], "interpol": [7, 8], "histor": 7, "context": 7, "principl": 7, "redefinit": 8, "high": 8, "level": 8, "refer": 9, "welcom": 10, "geol0069": 10, "earth": 10, "observ": 10, "chapter": 10, "notebook": [12, 13], "myst": [12, 13], "markdown": [12, 13], "an": 12, "cell": 12, "quickli": 12, "add": 12, "yaml": 12, "metadata": 12, "content": 13, "block": 13, "output": 13}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})