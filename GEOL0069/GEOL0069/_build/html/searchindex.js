Search.setIndex({"docnames": ["Chapter 1:AI_Algorithms", "Chapter 1:Fetching_Data", "Chapter 1:IRIS", "Chapter 1:ML", "Chapter 1:Preparation", "Chapter 1:Sea-ice_and_Lead_Classification", "Chapter 1:rollout", "Chapter2:Intro to Gaussian Processes", "Chapter2:Optimal_Interpolation", "Chapter2:Practical_Applications", "References1", "intro", "markdown", "markdown-notebooks", "notebooks"], "filenames": ["Chapter 1:AI_Algorithms.ipynb", "Chapter 1:Fetching_Data.ipynb", "Chapter 1:IRIS.ipynb", "Chapter 1:ML.ipynb", "Chapter 1:Preparation.ipynb", "Chapter 1:Sea-ice_and_Lead_Classification.ipynb", "Chapter 1:rollout.ipynb", "Chapter2:Intro to Gaussian Processes.ipynb", "Chapter2:Optimal_Interpolation.ipynb", "Chapter2:Practical_Applications.ipynb", "References1.ipynb", "intro.md", "markdown.md", "markdown-notebooks.md", "notebooks.ipynb"], "titles": ["AI/Machine Learning Implementation", "Data Fetching", "Introduction to Intelligently Reinforced Image Segmentation (IRIS)", "Introduction to AI/Machine Learning", "Preparation", "Sea-ice and Lead Classification", "Roll-out on a Full Image", "Introduction to Gaussian Processes", "Introduction to Optimal Interpolation", "Applications of Gaussian Processes on Optimal Interpolation", "References", "Welcome to GEOL0069 AI for Earth Observation", "&lt;no title&gt;", "Notebooks with MyST Markdown", "Content with notebooks"], "terms": {"interact": [0, 3, 5, 6, 14], "version": [0, 3, 5, 6], "For": [0, 1, 2, 3, 4, 5, 6, 7, 14], "hand": [0, 1, 3, 5, 6], "experi": [0, 3, 5, 6], "thi": [0, 1, 2, 3, 4, 5, 6, 7, 13, 14], "chapter": [0, 2, 3, 4, 5, 6, 7], "s": [0, 1, 3, 4, 5, 6, 7, 13, 14], "content": [0, 1, 3, 4, 5, 6, 13], "access": [0, 1, 3, 4, 5, 6], "notebook": [0, 1, 3, 4, 5, 6], "googl": [0, 3, 5, 6], "colab": [0, 3, 5, 6], "In": [0, 1, 2, 3, 4, 5, 6, 7, 10], "section": [0, 1, 5], "we": [0, 1, 2, 3, 4, 5, 6, 7], "delv": [0, 1, 3], "applic": [0, 1, 2, 3, 5, 7], "promin": 0, "algorithm": [0, 3, 7], "dataset": [0, 1, 2, 3, 6], "curat": 0, "preced": 0, "while": [0, 2, 3, 7], "an": [0, 1, 2, 3, 4, 5, 6, 7, 10], "exhaust": 0, "comprehens": [0, 1, 7], "isn": 0, "t": [0, 1, 3, 5, 6, 7, 14], "mandatori": [0, 2], "grasp": 0, "underli": [0, 1, 3, 7], "principl": [0, 3], "confid": [0, 7], "The": [0, 1, 2, 4, 5, 6, 7, 13], "main": [0, 5, 7], "task": [0, 1, 2, 3, 4, 7], "focu": 0, "becaus": [0, 3, 5], "ar": [0, 1, 2, 4, 5, 6, 7, 13], "do": [0, 1, 2, 5, 6, 14], "surfac": [0, 5], "discrimin": [0, 3], "come": 0, "across": [0, 2, 5, 6], "regress": [0, 7], "futur": [0, 2, 3, 7], "from": [0, 2, 3, 4, 6, 7, 14], "previou": [0, 2, 3, 5], "you": [0, 1, 2, 3, 4, 5, 6, 7, 13, 14], "should": [0, 1, 2, 4, 5, 13], "have": [0, 1, 2, 3, 4, 5, 7, 13], "your": [0, 1, 2, 3, 4, 5, 6, 13, 14], "train": [0, 2, 5, 6, 7], "test": [0, 4, 5, 6], "readi": [0, 1, 2, 5], "import": [0, 1, 3, 4, 6, 14], "os": [0, 1, 5], "x_train": [0, 5], "np": [0, 1, 3, 5, 6, 14], "path": [0, 1, 2, 5, 6, 13], "join": [0, 1, 5], "save_path": [0, 5], "x_train_balanc": [0, 5], "npy": [0, 5, 6], "x_test": [0, 5], "x_test_balanc": [0, 5], "y_train": [0, 5], "y_train_balanc": [0, 5], "y_test": [0, 5], "y_test_balanc": [0, 5], "commonli": 0, "known": [0, 3, 7], "class": [0, 2, 3, 5], "special": [0, 2], "design": [0, 1, 2], "process": [0, 1, 2, 5, 6, 10], "like": [0, 1, 2, 3, 4, 5, 7, 13], "topolog": 0, "gbc16": [0, 10], "lbh15": [0, 10], "origin": [0, 2, 4, 5, 6], "visual": [0, 5, 6], "cortex": 0, "biolog": 0, "revolutionis": 0, "wai": [0, 2, 3, 4, 5, 7], "understand": [0, 1, 5, 7, 13], "interpret": [0, 3, 7], "when": [0, 2, 3, 5, 13], "suffer": 0, "two": [0, 1, 2, 3, 5, 7, 13], "issu": [0, 1, 2], "too": [0, 5], "mani": [0, 7, 13], "paramet": [0, 1, 3, 7], "simpl": [0, 3, 7], "256x256": 0, "color": [0, 3, 14], "input": [0, 3, 5, 6, 7], "layer": 0, "would": [0, 3, 5], "256": 0, "196": 0, "608": 0, "neuron": 0, "lead": [0, 2, 3, 6, 11], "enorm": 0, "number": [0, 2, 3, 5, 6, 7], "even": [0, 3], "first": [0, 1, 2, 5], "hidden": 0, "loss": 0, "inform": [0, 1, 5, 7, 10, 13, 14], "flatten": [0, 5], "vector": [0, 3, 7], "can": [0, 1, 2, 3, 4, 5, 6, 7, 13, 14], "lose": [0, 3], "pattern": [0, 3, 5, 6, 7, 10], "which": [0, 1, 2, 3, 4, 5, 7, 13], "often": [0, 3, 7], "crucial": [0, 1, 3, 5, 6, 7], "address": [0, 5], "both": [0, 1, 2, 5, 7], "introduc": [0, 3, 4], "core": [0, 7, 11], "build": 0, "block": [0, 5, 13], "It": [0, 1, 3, 4, 5, 7], "slide": [0, 4], "filter": [0, 1], "smaller": [0, 5], "size": [0, 2, 3, 5, 6], "than": 0, "over": [0, 3, 5, 6, 7], "produc": [0, 2], "map": [0, 3, 6], "convolv": 0, "primari": [0, 1, 3], "purpos": 0, "extract": [0, 5, 6], "pool": 0, "reduc": [0, 3], "dimens": [0, 5, 6], "therebi": 0, "comput": [0, 1, 3, 7], "most": [0, 1, 3, 7], "common": [0, 3, 7], "type": [0, 4, 7], "max": 0, "fulli": 0, "connect": [0, 1, 4, 7], "after": [0, 1, 2], "sever": [0, 1, 3, 5, 7], "final": [0, 1], "done": [0, 1, 5], "one": [0, 1, 3, 4, 5], "more": [0, 1, 2, 3, 5, 7, 13, 14], "all": [0, 1, 2, 3, 4, 5, 13], "activ": [0, 5], "seen": [0, 7], "regular": 0, "function": [0, 2, 6], "non": [0, 3, 4, 7], "linear": [0, 3, 5, 7], "rectifi": 0, "unit": [0, 6], "relu": 0, "automat": 0, "initi": [0, 1, 3, 5, 7], "might": [0, 1, 2, 3, 7], "detect": [0, 5], "edg": 0, "next": [0, 1, 5, 7], "shape": [0, 1, 3, 5, 6], "combin": [0, 1, 5, 7], "further": [0, 2, 3, 5, 6], "complex": [0, 2, 3, 7], "structur": [0, 1, 3, 4, 5, 6, 7], "abil": [0, 3], "raw": [0, 1, 2, 3, 5], "give": [0, 7], "power": [0, 1, 3, 7], "allow": [0, 1, 2, 3, 4, 7], "them": [0, 1, 2, 3, 5], "object": [0, 1, 3], "simpler": 0, "earlier": 0, "share": [0, 4], "A": [0, 1, 2, 3, 6], "detector": [0, 5], "part": [0, 1, 2, 3, 5], "anoth": [0, 5, 7], "ksh12": [0, 10], "sparsiti": 0, "each": [0, 1, 2, 3, 5, 6, 7], "output": [0, 1, 2, 3, 5, 6, 7, 13], "valu": [0, 1, 3, 5, 6, 7], "depend": [0, 2, 3, 7], "onli": [0, 2, 3, 5], "small": [0, 11], "make": [0, 1, 2, 3, 4, 5, 6, 7, 14], "effici": [0, 1, 2, 5], "below": [0, 1, 2, 3, 4, 5, 6], "ll": [0, 1, 2, 4], "find": [0, 2, 3, 4, 5], "tensorflow": 0, "treat": [0, 13], "blueprint": 0, "subsequ": [0, 1, 2, 5], "tf": 0, "kera": 0, "defin": [0, 1, 3, 5, 7, 13], "sequenti": 0, "add": [0, 4, 5], "conv2d": 0, "32": [0, 10], "input_shap": 0, "21": [0, 3, 5, 6], "pad": 0, "same": [0, 1, 2, 6], "maxpooling2d": 0, "addit": [0, 2, 6], "need": [0, 2, 3, 4, 5, 6, 7, 13], "dens": 0, "64": [0, 5, 6], "10": [0, 3, 10, 14], "softmax": 0, "compil": 0, "optim": [0, 7], "adam": [0, 3], "sparse_categorical_crossentropi": 0, "metric": [0, 3, 7], "accuraci": [0, 5, 7], "fit": [0, 3], "epoch": 0, "validation_data": 0, "x_val": 0, "y_val": 0, "notabl": 0, "signific": [0, 3], "also": [0, 2, 3, 5, 6, 13, 14], "its": [0, 1, 3, 5], "preval": 0, "so": [0, 1, 5, 13], "let": [0, 5, 6, 7, 13], "concept": [0, 11], "bre01": [0, 10], "qui86": [0, 10], "method": [0, 3, 7, 10], "emploi": [0, 7], "multipl": [0, 1, 5, 10], "achiev": 0, "better": [0, 3], "predict": [0, 3, 6, 7], "perform": [0, 1, 2, 3, 7], "ani": [0, 1, 3, 4, 5, 7, 13], "individu": 0, "alon": 0, "die00": [0, 10], "behind": 0, "weak": 0, "learner": 0, "togeth": [0, 7], "form": [0, 5, 7], "strong": 0, "central": [0, 3], "thei": [0, 1, 5, 7], "split": [0, 1, 3, 5], "subset": [0, 3], "base": [0, 1, 2, 3, 4, 5, 7, 13], "recurs": 0, "leverag": [0, 1, 2], "where": [0, 1, 2, 3, 4, 5, 6, 7], "creat": [0, 1, 2, 3, 4, 14], "draw": 0, "sampl": [0, 2, 3, 5, 14], "replac": [0, 1, 2, 5], "separ": [0, 1, 5], "built": [0, 3, 13], "bre96": [0, 10], "convent": [0, 2], "chosen": [0, 7], "everi": [0, 3], "node": 0, "howev": [0, 3], "set": [0, 2, 4, 5, 6, 7], "choos": [0, 2, 3, 4, 7], "ensur": [0, 1, 2, 5], "divers": [0, 1], "generalis": 0, "By": [0, 1, 2, 6], "tend": 0, "gener": [0, 2, 3, 4, 6, 7], "less": [0, 5], "suscept": 0, "overfit": 0, "parallel": 0, "independ": [0, 3], "speed": 0, "up": [0, 2, 4, 5], "consider": 0, "larg": [0, 1, 5], "handl": [0, 1, 3, 5, 7], "miss": [0, 3], "still": 0, "reason": [0, 5], "score": [0, 3], "provid": [0, 1, 2, 3, 4, 5, 7], "aid": 0, "sklearn": [0, 3, 5], "randomforestclassifi": 0, "initialis": [0, 6, 7], "n_estim": 0, "specifi": [0, 1, 2, 5, 7], "clf": 0, "100": [0, 2, 3, 5, 6, 14], "reshap": [0, 5, 6], "order": 0, "compat": [0, 1, 6], "x_reshap": 0, "0": [0, 2, 3, 5, 6, 7, 14], "x_test_reshap": 0, "y_pred": [0, 6], "recent": 0, "breakthrough": 0, "field": [0, 3], "depart": 0, "approach": [0, 3], "appli": [0, 1, 6, 7], "were": [0, 3], "natur": [0, 3, 7, 10], "languag": 0, "instead": [0, 2, 5, 7], "divid": [0, 5], "fix": [0, 14], "patch": [0, 5, 6], "linearli": 0, "emb": [0, 14], "result": [0, 1, 3, 5], "sequenc": 0, "token": [0, 1], "dbk": [0, 10], "20": [0, 10], "sinc": [0, 3], "doesn": [0, 3, 6], "notion": 0, "rel": 0, "ad": [0, 2, 3], "retain": [0, 3, 6], "consist": [0, 2, 6], "multi": [0, 1, 3], "self": 0, "attent": 0, "mechan": 0, "feed": [0, 5], "forward": 0, "through": [0, 1, 3, 4, 6, 7], "refer": [0, 3, 11], "cl": 0, "classifi": [0, 2, 3, 6, 10], "transfer": 0, "pre": 0, "fine": [0, 3], "tune": [0, 3, 7], "high": [0, 5, 7], "avail": [0, 3], "label": [0, 2, 3, 5], "limit": 0, "scalabl": 0, "hungri": 0, "compar": 0, "continu": [0, 3, 7], "improv": [0, 3], "amount": [0, 5], "increas": [0, 2, 3], "surpass": 0, "other": [0, 1, 4, 7, 10, 13], "flexibl": [0, 3, 7], "potenti": [0, 3, 5], "vari": [0, 5, 6], "demand": 0, "computation": 0, "intens": 0, "especi": [0, 3, 6, 7], "deal": [0, 3], "ha": [0, 1, 2, 3, 5], "requir": [0, 1, 2, 3, 6, 7], "To": [0, 1, 2, 4, 7], "implment": 0, "much": [0, 7], "complic": 0, "librari": [0, 1, 7], "follow": [0, 1, 2, 3, 4, 5, 7, 13], "some": [0, 1, 2, 3, 14], "exist": [0, 1, 3, 5], "muliti": 0, "don": [0, 5], "know": [0, 3], "exactli": 0, "detail": [0, 1, 2, 3, 5, 13], "cours": [0, 4], "pleas": [0, 1, 2, 5], "exampl": [0, 1, 2, 3, 5, 6, 14], "instal": [0, 1, 5], "packag": [0, 1, 5], "pip": 0, "u": 0, "addon": 0, "numpi": [0, 1, 2, 3, 5, 6, 14], "tensorflow_addon": 0, "tfa": 0, "accuracy_scor": 0, "confusion_matrix": 0, "classification_report": 0, "def": [0, 1, 6], "mlp": 0, "x": [0, 1, 3, 5, 6, 7], "hidden_unit": 0, "dropout_r": 0, "nn": 0, "gelu": 0, "dropout": 0, "return": [0, 1, 6], "__init__": 0, "patch_siz": 0, "super": 0, "call": [0, 6], "batch_siz": [0, 6], "extract_patch": 0, "stride": 0, "rate": [0, 3], "patch_dim": 0, "patchencod": 0, "num_patch": 0, "projection_dim": 0, "project": [0, 1, 2, 4, 6], "position_embed": 0, "input_dim": 0, "output_dim": 0, "rang": [0, 1, 5, 6, 14], "start": [0, 1, 2, 4, 7, 13], "delta": 0, "encod": 0, "create_vit_classifi": 0, "augment": 0, "more_data": 0, "encoded_patch": 0, "_": [0, 1], "transformer_lay": 0, "normal": [0, 3, 7], "x1": [0, 5, 6], "layernorm": 0, "epsilon": 0, "1e": 0, "6": 0, "attention_output": 0, "multiheadattent": 0, "num_head": 0, "key_dim": 0, "skip": 0, "x2": [0, 5, 6], "x3": 0, "transformer_unit": 0, "tensor": 0, "represent": [0, 7], "5": [0, 3, 5, 10, 14], "mlp_head_unit": 0, "logit": 0, "num_class": [0, 5], "run_experi": 0, "adamw": 0, "learning_r": 0, "weight_decai": 0, "sparsecategoricalcrossentropi": 0, "from_logit": 0, "true": [0, 1, 5], "sparsecategoricalaccuraci": 0, "name": [0, 1, 2, 4, 5], "sparsetopkcategoricalaccuraci": 0, "top": [0, 1, 2, 5, 6, 13], "checkpoint_filepath": 0, "tmp": 0, "checkpoint": 0, "checkpoint_callback": 0, "callback": 0, "modelcheckpoint": 0, "monitor": [0, 1, 5], "val_accuraci": 0, "save_best_onli": 0, "save_weights_onli": 0, "histori": 0, "y": [0, 1, 3, 5, 6, 7], "30": 0, "validation_split": 0, "load_weight": 0, "top_5_accuraci": 0, "evalu": [0, 3, 7], "print": [0, 1, 5, 6, 13], "f": [0, 1, 2, 3, 5, 7], "round": 0, "chang": [0, 1, 2, 3, 4, 5], "want": [0, 1, 5, 6, 14], "001": 0, "0001": 0, "num_epoch": 0, "image_s": 0, "72": 0, "8": [0, 1], "2048": 0, "1024": 0, "resiz": 0, "randomflip": 0, "horizont": 0, "randomrot": 0, "factor": [0, 5, 6], "02": [0, 1], "randomzoom": 0, "height_factor": 0, "width_factor": 0, "adapt": [0, 3, 7], "here": [0, 1, 2, 3, 4, 5, 6, 14], "save": [0, 1, 2, 4, 5, 6], "alwai": 0, "via": 0, "line": [0, 2, 3, 13, 14], "load_model": 0, "pivot": [0, 5], "robust": [0, 1], "our": [0, 1, 2, 5, 6, 7], "just": [0, 3, 5, 6, 7], "memoris": 0, "well": [0, 3, 14], "new": [0, 3, 4, 5], "unseen": [0, 3], "nuanc": [0, 1], "between": [0, 3, 5, 7], "procedur": [0, 1], "dure": 0, "particularli": [0, 2, 7], "incorpor": [0, 7], "earli": 0, "stop": 0, "anneal": 0, "etc": [0, 3, 14], "due": 0, "time": [0, 1, 2, 5, 7], "singl": [0, 1, 5], "hold": [0, 2], "out": [0, 2, 11, 14], "sometim": 0, "few": [0, 5], "differ": [0, 2, 5, 6, 7], "specif": [0, 1, 2, 3, 5, 6, 7], "hyperparamet": [0, 3, 7], "involv": [0, 1, 3, 4, 6, 7], "bayesian": 0, "dedic": 0, "optuna": 0, "rai": 0, "standard": [0, 5], "techniqu": [0, 3, 10], "typic": [0, 1, 3, 7], "faster": 0, "estim": [0, 3, 7], "e": [0, 1, 3, 5, 6, 10], "g": [0, 1, 3, 6, 10], "gridsearchcv": 0, "despit": 0, "trend": [0, 7], "worth": [0, 10], "note": [0, 1, 2, 3, 4, 7], "resourc": [0, 1], "permit": 0, "similarli": 0, "iter": [0, 1, 3, 5, 6], "gradient": [0, 3], "boost": 0, "choic": [0, 3, 4, 5, 7], "reli": 0, "actual": [0, 1, 2, 3, 5], "includ": [0, 1, 3, 4, 5, 7, 13, 14], "check": [0, 1, 5, 14], "contain": [0, 1, 2, 5, 6], "randomli": [0, 5], "partit": 0, "equal": [0, 6], "Of": 0, "remain": [0, 5], "repeat": 0, "onc": [0, 1, 2, 3], "averag": [0, 7], "cv": 0, "model_select": [0, 5], "cross_val_scor": 0, "assum": [0, 1, 5], "mean": [0, 3, 14], "popular": [0, 4], "space": [0, 7], "hypothet": 0, "param_grid": 0, "50": 0, "150": 0, "max_depth": 0, "none": 0, "grid_search": 0, "best_params_": 0, "best_score_": 0, "acquir": 1, "been": [1, 2], "integr": [1, 4, 5], "analys": [1, 3, 5], "olci": [1, 3, 6], "sentinel": [1, 5], "satellit": [1, 3, 5], "dataspac": 1, "segment": [1, 3, 6, 11], "guid": [1, 2, 7, 14], "rich": 1, "retriev": 1, "work": [1, 3, 4, 7, 14], "overview": 1, "cornerston": [1, 3], "european": 1, "union": 1, "observ": [1, 2, 3, 5, 7], "program": [1, 3], "wealth": 1, "aim": [1, 5], "environ": [1, 2, 4], "support": [1, 3, 13], "area": [1, 6], "climat": [1, 3, 5], "disast": 1, "respons": [1, 5], "urban": 1, "plan": [1, 2], "kei": [1, 2, 7], "featur": [1, 3, 5, 7], "offer": [1, 4, 5, 7], "imageri": [1, 3, 5], "atmospher": [1, 5, 6], "measur": [1, 7], "indic": [1, 5, 7], "freeli": 1, "foster": 1, "open": [1, 2, 4, 5], "scienc": [1, 3, 4], "research": [1, 5], "visit": 1, "platform": [1, 2], "analyz": [1, 3, 5], "geospati": 1, "scale": [1, 3, 7, 10], "petabyt": 1, "catalog": 1, "cloud": [1, 2, 4], "enabl": [1, 4], "planetari": 1, "environment": [1, 5], "analysi": [1, 2, 4, 5, 7], "capabl": [1, 2, 3, 6], "extens": [1, 2, 3], "infrastructur": 1, "explor": [1, 7], "tutori": 1, "commun": 1, "script": 1, "offici": [1, 2], "site": 1, "us": [1, 3, 5, 6, 7, 13], "help": [1, 3, 5], "get": [1, 2, 4, 5, 13], "befor": [1, 2, 3, 4, 5], "necessari": [1, 3, 4, 7], "sourc": 1, "alreadi": 1, "If": [1, 2, 3, 4, 13], "re": [1, 3, 4, 5], "ahead": 1, "registr": [1, 2], "haven": 1, "take": [1, 5, 7], "moment": [1, 3, 5], "simpli": [1, 2], "page": [1, 2, 13], "instruct": [1, 2, 5, 13], "sign": [1, 14], "meticul": 1, "accur": [1, 2, 3], "geograph": [1, 5], "scope": 1, "frame": 1, "interest": [1, 5, 6], "precis": [1, 3], "target": [1, 7], "effect": [1, 3], "file": [1, 2, 4, 5, 6, 13], "proce": [1, 2], "list": [1, 2, 4, 5, 6], "relev": [1, 3], "interfac": [1, 2, 5], "identifi": [1, 3, 5, 7], "match": 1, "criteria": 1, "obtain": 1, "transform": [1, 5, 6, 10], "recognis": 1, "convers": 1, "facilit": [1, 2], "With": [1, 13], "correctli": [1, 6], "doe": 1, "henc": 1, "essenti": [1, 3, 5, 7], "nativ": [1, 5], "unalt": 1, "dive": [1, 7], "lai": 1, "groundwork": 1, "proper": 1, "authent": [1, 4], "preparatori": 1, "smooth": [1, 2, 7], "workflow": [1, 2, 3, 5], "sure": [1, 4, 5, 14], "tool": [1, 2, 3, 4, 7, 10], "log": [1, 4], "complet": [1, 2], "setup": [1, 2, 6, 7], "equip": [1, 4], "geometri": [1, 5, 6], "polygon": 1, "point": [1, 2, 4, 7], "request": 1, "panda": 1, "pd": 1, "datetim": 1, "timedelta": 1, "subprocess": 1, "streamlin": [1, 2], "load": [1, 5, 6], "These": [1, 3, 5, 7], "variou": [1, 3, 5, 7], "preliminari": 1, "ve": [1, 7], "proceed": 1, "docstr": 1, "idea": [1, 7], "what": 1, "parse_gee_filenam": 1, "gee_filenam": 1, "pars": 1, "sens": 1, "date": 1, "str": 1, "tupl": 1, "_ol_1_efr": 1, "start_datetim": 1, "end_datetim": 1, "20180601t014926": 1, "sensing_d": 1, "start_tim": 1, "9": [1, 3, 5], "get_access_token": 1, "usernam": [1, 2], "password": [1, 2], "credenti": 1, "session": [1, 2], "url": [1, 4], "http": [1, 2, 10], "ident": 1, "eu": 1, "auth": 1, "realm": [1, 6], "cdse": 1, "protocol": 1, "openid": 1, "grant_typ": 1, "client_id": 1, "public": 1, "post": [1, 14], "raise_for_statu": 1, "json": [1, 2, 5, 6], "access_token": 1, "query_sentinel3_olci_data": 1, "queri": 1, "datafram": 1, "about": [1, 5, 13, 14], "sensing_datetim": 1, "strptime": 1, "m": [1, 3, 6, 7, 10], "dt": 1, "h": [1, 10], "second": [1, 5], "construct": [1, 5, 7], "catalogu": 1, "odata": 1, "v1": 1, "product": 1, "contentd": 1, "ge": 1, "strftime": 1, "000z": 1, "le": 1, "dai": 1, "orderbi": 1, "1000": [1, 2, 6], "header": 1, "author": 1, "bearer": 1, "debug": 1, "api": 1, "wa": [1, 3], "success": [1, 3], "status_cod": 1, "200": [1, 3, 5, 6], "error": [1, 3], "empti": 1, "fail": [1, 3], "unabl": [1, 3], "statu": 1, "code": [1, 3, 4, 5, 6, 13], "text": [1, 13], "search_results_df": 1, "from_dict": 1, "sort": 1, "sensingstart": 1, "to_datetim": 1, "lambda": 1, "sort_valu": 1, "inplac": 1, "fetch_s3_images_by_area_and_d": 1, "date_rang": 1, "spatial_ext": 1, "area_of_interest": 1, "imag": [1, 3, 5, 10, 11, 14], "param": 1, "end": [1, 5, 14], "2018": 1, "06": 1, "01": 1, "spatial": [1, 6], "extent": 1, "min_lon": 1, "min_lat": 1, "max_lon": 1, "max_lat": 1, "dictionari": 1, "id": 1, "modul": 1, "variabl": [1, 3, 5, 6, 7], "s3_product": 1, "s3": 1, "within": [1, 2, 4, 5], "s3_collect": 1, "imagecollect": 1, "filterd": 1, "filterbound": 1, "s3_image_id": 1, "aggregate_arrai": 1, "system": [1, 2, 5, 10], "index": [1, 5], "getinfo": 1, "s3_images_info": 1, "store": [1, 4, 5, 6], "s3_image_detail": 1, "collect": [1, 3, 7], "img_info": 1, "image_id": 1, "properti": 1, "image_d": 1, "time_start": 1, "append": [1, 5, 6], "download_single_product": 1, "product_id": 1, "file_nam": 1, "download_dir": 1, "downloaded_product": 1, "uniqu": [1, 5], "directori": [1, 2, 4, 5, 6], "makedir": [1, 5], "exist_ok": 1, "zipper": 1, "updat": [1, 2], "stream": 1, "output_file_path": 1, "zip": [1, 5], "wb": 1, "chunk": [1, 5], "iter_cont": 1, "chunk_siz": 1, "8192": 1, "write": [1, 4, 13], "els": 1, "meet": 1, "snippet": [1, 4], "demonstr": 1, "how": [1, 3, 5, 7, 13], "arctic_region_mask_lin": 1, "loadtxt": 1, "region_mask_lin": 1, "txt": 1, "repres": [1, 5, 7], "arctic": 1, "ocean": 1, "boundari": [1, 5], "boundary_polygon": 1, "region_mask_line_tt": 1, "lon": [1, 6], "lat": [1, 6], "linestr": 1, "coord": 1, "proj": [1, 6], "epsg": 1, "4326": 1, "geodes": 1, "180": 1, "60": 1, "90": [1, 6], "coordin": [1, 2, 6], "export_task": 1, "recogn": [1, 3], "correspond": [1, 2, 3, 5, 7], "gee": 1, "gee_image_id": 1, "s3b_20180601t182924_20180601t183224": 1, "correct": 1, "s3_olci_data": 1, "receiv": 1, "look": [1, 2], "desir": [1, 2, 3], "usual": [1, 5, 7], "send": 1, "avoid": [1, 5], "until": [1, 5], "throughout": 2, "utilis": 2, "user": [2, 4], "friendli": 2, "web": [2, 4], "flask": 2, "develop": 2, "esa": 2, "philab": 2, "thank": 2, "alistair": 2, "franci": 2, "whose": 2, "guidanc": 2, "instrument": [2, 6], "indispens": [2, 3], "ground": [2, 5], "truth": 2, "data": [2, 4, 6, 7, 10, 11, 14], "machin": [2, 4, 5, 6, 7, 10, 11], "learn": [2, 4, 5, 6, 7, 10, 11], "Its": 2, "intuit": 2, "click": [2, 4], "greatli": 2, "simplifi": 2, "earth": [2, 3], "enhanc": 2, "creation": 2, "repo": 2, "direct": [2, 13], "github": 2, "repositori": 2, "consum": 2, "manual": 2, "configur": [2, 3], "easili": 2, "deploi": 2, "container": 2, "elimin": 2, "manag": [2, 5], "reproduc": [2, 14], "execut": [2, 4, 13], "deploy": 2, "portabl": 2, "behaviour": [2, 3], "ideal": 2, "solut": [2, 3], "hassl": 2, "free": [2, 4], "place": 2, "window": 2, "maco": 2, "linux": 2, "oper": 2, "desktop": 2, "engin": [2, 3], "doc": [2, 4], "com": 2, "account": [2, 4], "option": [2, 4], "hub": 2, "mai": [2, 3, 5, 10], "antiviru": 2, "secur": [2, 5], "devic": [2, 4], "interfer": 2, "case": [2, 5, 7], "encount": 2, "try": [2, 3, 6], "command": [2, 13], "resolv": 2, "temporarili": 2, "disabl": 2, "trust": 2, "step": [2, 3, 5, 7], "termin": 2, "prompt": 2, "totony4r": 2, "1": [2, 3, 4, 5, 6, 7, 10, 14], "wait": 2, "download": [2, 3], "progress": 2, "di": 2, "plai": [2, 4, 5, 6], "successfulli": 2, "toi": [2, 7], "config": 2, "p": [2, 3], "80": 2, "5000": 2, "v": 2, "path_to_data": 2, "rm": 2, "see": [2, 5, 13, 14], "appear": 2, "own": [2, 4], "browser": [2, 4], "navig": [2, 4, 5], "localhost": 2, "link": [2, 4], "ask": 2, "127": 2, "upon": 2, "greet": 2, "button": [2, 4], "screen": 2, "shown": 2, "At": [2, 5], "prefer": 2, "fill": 2, "regist": 2, "redirect": 2, "begin": [2, 14], "tip": 2, "pencil": 2, "paint": 2, "pixel": [2, 5, 6], "anywher": 2, "rectangular": 2, "region": [2, 5, 11], "mark": 2, "red": [2, 3], "dot": 2, "zoom": 2, "mous": 2, "scroll": 2, "wheel": 2, "finger": 2, "swipe": 2, "down": 2, "touchpad": 2, "adjust": [2, 3, 5, 7], "accord": 2, "cursor": 2, "shift": 2, "action": 2, "decreas": [2, 7], "classif": [2, 6, 7, 10, 11], "finish": 2, "show": [2, 3, 5, 6, 13], "drawn": 2, "displai": [2, 5, 13], "locat": [2, 3, 4, 5], "folder": [2, 4, 5], "abl": 2, "arrai": [2, 3, 5, 6, 14], "As": [2, 14], "previous": 2, "mention": 2, "consequ": 2, "practic": [2, 10], "benefici": 2, "those": 2, "sub": [2, 6], "total": 2, "three": 2, "3": [2, 3, 5, 6], "400": [2, 5], "300": [2, 5, 6], "700": [2, 6], "third": 2, "tackl": 2, "challeng": [2, 6], "scenario": [2, 7], "partial": 2, "1300": 2, "rememb": 2, "accordingli": 2, "2": [2, 3, 5, 6, 7, 10, 13], "respect": [2, 6], "upload": [2, 4], "submiss": 2, "studentnumb": 2, "student": [2, 3], "irismask_image2_sample1_studentnumb": 2, "irismask_image2_sample2_studentnumb": 2, "irismask_image2_sample3_studentnumb": 2, "adher": 2, "review": 2, "week": 3, "materi": 3, "drive": [3, 5], "focus": 3, "vital": [3, 5], "evolv": 3, "significantli": 3, "conceptu": 3, "coin": 3, "arthur": 3, "samuel": 3, "1959": 3, "ml": 3, "describ": [3, 4], "without": [3, 4], "being": [3, 5, 7], "explicitli": 3, "year": 3, "grown": 3, "exponenti": 3, "propel": 3, "advanc": [3, 7, 10], "todai": 3, "remark": 3, "made": 3, "numer": 3, "compris": 3, "stage": 3, "anyon": 3, "definit": 3, "clearli": 3, "solv": [3, 7], "constraint": 3, "impact": 3, "major": 3, "discuss": 3, "sea": [3, 6, 11], "ic": [3, 6, 11], "gather": 3, "qualiti": [3, 5], "quantiti": [3, 5], "varieti": 3, "influenc": [3, 5, 7], "mostli": 3, "publicli": 3, "availbel": 3, "onlin": 3, "preprocess": 3, "clean": 3, "format": [3, 5, 6, 7], "convert": [3, 5, 6, 13], "normalis": 3, "iri": [3, 6, 11], "select": [3, 4, 7], "attribut": 3, "band": [3, 5, 6], "discard": 3, "redund": 3, "appropri": [3, 7], "characterist": [3, 7], "outcom": [3, 7], "determin": [3, 7], "recal": 3, "f1": 3, "invov": 3, "tweak": 3, "distinguish": 3, "variat": 3, "categoris": 3, "serv": [3, 5], "distinct": [3, 5, 6], "fundament": [3, 7], "right": [3, 4, 7], "given": 3, "real": 3, "best": [3, 7], "suit": [3, 7], "hous": 3, "price": 3, "ag": 3, "forecast": [3, 7], "sale": 3, "figur": [3, 6], "month": 3, "polynomi": 3, "random": [3, 5, 7, 10, 14], "forest": [3, 10], "categor": 3, "group": 3, "whether": 3, "email": 3, "spam": 3, "diagnos": 3, "tumor": 3, "malign": 3, "benign": 3, "medic": 3, "binari": [3, 5], "logist": 3, "decis": [3, 7, 10], "tree": [3, 10], "neural": [3, 10], "network": [3, 10], "discret": 3, "categori": [3, 6], "squar": 3, "mse": 3, "root": [3, 7], "rmse": [3, 7], "wherea": 3, "temperatur": [3, 5], "decid": 3, "belong": 3, "directli": [3, 4], "mainli": 3, "goal": [3, 7], "classic": 3, "recognit": [3, 10], "python": [3, 4], "matplotlib": [3, 5, 6, 14], "pyplot": [3, 5, 6, 14], "plt": [3, 5, 6, 14], "linear_model": 3, "linearregress": 3, "4": [3, 5, 10, 14], "scatter": 3, "blue": 3, "plot": [3, 5, 14], "titl": 3, "xlabel": 3, "ylabel": 3, "seek": 3, "inher": 3, "cluster": 3, "similar": [3, 7], "instanc": [3, 5], "custom": 3, "market": 3, "purchas": 3, "habit": 3, "k": [3, 7], "kmean": 3, "rand": 3, "n_cluster": 3, "y_kmean": 3, "c": 3, "cmap": [3, 14], "viridi": 3, "center": [3, 5, 6], "cluster_centers_": 3, "black": 3, "alpha": 3, "akin": 3, "who": 3, "memor": 3, "fact": 3, "happen": 3, "thoroughli": 3, "captur": [3, 5, 7], "nois": [3, 7], "anomali": [3, 5], "thu": [3, 5], "becom": 3, "excel": 3, "imagin": [3, 7], "cat": 3, "photo": 3, "irrelev": 3, "background": 3, "poorli": 3, "occur": 3, "hasn": 3, "enough": 3, "relationship": [3, 7], "straight": 3, "wildli": 3, "curv": 3, "illustr": 3, "degre": 3, "situat": 3, "n": [3, 14], "th": 3, "nonlinear": 3, "curvatur": 3, "synthet": 3, "seed": [3, 14], "linspac": [3, 14], "sin": [3, 7], "pi": [3, 5, 6, 7], "25": 3, "consid": 3, "figsiz": [3, 14], "14": 3, "i": [3, 5, 6], "enumer": [3, 5], "coef": 3, "poly1d": 3, "x_poli": 3, "y_poli": 3, "subplot": [3, 14], "bo": 3, "r": 3, "ylim": 3, "legend": [3, 14], "tight_layout": 3, "obviou": 3, "But": [3, 5, 14], "certain": 3, "level": 3, "cost": 3, "quantifi": [3, 7], "far": 3, "off": [3, 5, 13], "deviat": 3, "higher": 3, "minim": 3, "cross": 3, "entropi": 3, "weight": 3, "descent": 3, "stochast": 3, "sgd": 3, "teach": 3, "valid": 3, "meaning": 3, "seri": 4, "undertak": 4, "short": 4, "colaboratori": 4, "servic": 4, "gpu": 4, "freindli": 4, "excecut": 4, "go": [4, 6], "run": [4, 5, 13], "cell": 4, "icon": 4, "sidebar": 4, "runtim": 4, "hardwar": 4, "acceler": 4, "dropdown": 4, "mount": 4, "copi": 4, "app": 4, "menu": 4, "instructor": 4, "context": [4, 7], "altern": 4, "my": 4, "easi": 4, "organ": 4, "drag": 4, "move": 4, "organis": [4, 7], "expect": [4, 7], "welcom": 4, "could": [4, 7], "doubl": 4, "jupyt": [4, 13, 14], "login": 4, "flow": 4, "view": [4, 5, 6], "edit": [4, 6], "abov": [4, 5], "sheet": 4, "document": [4, 13, 14], "narrow": 5, "fractur": 5, "broken": 5, "movement": 5, "water": 5, "stress": 5, "induc": 5, "wind": 5, "meter": 5, "kilomet": 5, "width": [5, 6], "extend": [5, 7], "hundr": 5, "role": [5, 6], "polar": 5, "marin": 5, "ecosystem": 5, "dynam": 5, "heat": 5, "exchang": 5, "act": 5, "gatewai": 5, "moistur": 5, "momentum": 5, "weather": 5, "life": 5, "speci": 5, "air": 5, "breath": 5, "anim": 5, "seal": 5, "bear": 5, "human": 5, "rout": 5, "remot": 5, "carbon": 5, "cycl": 5, "contribut": 5, "uptak": 5, "co2": 5, "global": 5, "state": [5, 14], "art": 5, "spectromet": 5, "aboard": 5, "resolut": 5, "optic": 5, "visibl": 5, "infrar": 5, "spectrum": 5, "assess": 5, "veget": 5, "health": 5, "cover": [5, 7], "primarili": 5, "netcdf4": [5, 6], "imper": 5, "delin": 5, "exercis": 5, "main_folder_path": 5, "main_fold": 5, "sen3": 5, "d": [5, 13], "listdir": 5, "isdir": 5, "endswith": 5, "loop": [5, 6], "found": 5, "olci_file_p": [5, 6], "current": 5, "track": 5, "instrument_data": [5, 6], "nc": [5, 6], "insid": 5, "solar_flux": [5, 6], "solar": [5, 6], "flux": [5, 6], "detector_index": [5, 6], "tie": [5, 6], "tie_geometri": [5, 6], "angl": [5, 6], "sza": [5, 6], "zenith": [5, 6], "save_directori": 5, "radianc": [5, 6], "wavelength": 5, "olci_data": 5, "22": [5, 6], "There": [5, 14], "rstr": 5, "02d": [5, 6], "solar_flux_band": 5, "olci_nc": 5, "oa": [5, 6], "_radianc": [5, 6], "radiance_valu": 5, "asarrai": [5, 6], "calcul": [5, 6, 7], "zeros_lik": 5, "int": [5, 6], "bidirect": [5, 6], "reflect": [5, 6], "toa": [5, 6], "brf": [5, 6], "toa_brf": [5, 6], "co": [5, 6], "radian": [5, 6], "nanmin": 5, "nanmax": 5, "reshaped_arrai": 5, "moveaxi": [5, 6], "along": 5, "split_arrai": 5, "array_split": 5, "axi": [5, 6], "portion": 5, "arr": 5, "chunk_": 5, "_band_": 5, "One": 5, "thing": [5, 13], "wide": 5, "therefor": 5, "netcdf": [5, 6], "fron": 5, "now": [5, 7], "mask": 5, "outlin": 5, "orgini": 5, "thge": 5, "left": [5, 7], "bottom": 5, "y1": [5, 6], "y2": [5, 6], "cv2": 5, "train_test_split": 5, "mydriv": 5, "data_project": 5, "olci_test": 5, "olci_images3": 5, "datadir": 5, "chunk_3": 5, "mask_area": [5, 6], "roi": [5, 6], "read": 5, "imread": 5, "cpom_iri": 5, "png": 5, "imread_unchang": 5, "rgb": 5, "channel": 5, "binary_mask": 5, "worthi": 5, "care": 5, "align": [5, 14], "channel_1": 5, "rgb_imag": 5, "stack": 5, "imshow": [5, 6], "around": [5, 6], "height": [5, 6], "exclud": [5, 6], "border": [5, 6], "j": [5, 6, 10], "patches_arrai": [5, 6], "59004": 5, "becasu": 5, "inconsisit": 5, "trim": 5, "trimmed_mask": 5, "1d": 5, "sci": 5, "kit": 5, "test_siz": 5, "random_st": 5, "42": 5, "imbal": 5, "skew": 5, "compromis": 5, "balanc": 5, "equival": 5, "reliabl": [5, 7], "equit": 5, "comparison": 5, "abandom": 5, "ones": 5, "examin": 5, "present": [5, 6], "count": 5, "return_count": 5, "dict": 5, "9396": 5, "49608": 5, "indices_class_0": 5, "indices_class_1": 5, "sampled_indices_class_0": 5, "fals": 5, "combined_indic": 5, "concaten": 5, "balanced_patch": 5, "balanced_label": 5, "ratio": 5, "8440": 5, "8472": 5, "entir": 6, "opportun": 6, "Such": 6, "stretch": 6, "larger": 6, "capac": 6, "pyproj": 6, "math": [6, 14], "wgs84": 6, "eas": 6, "grid": 6, "wgs84toease2": 6, "proj_ease2": 6, "laea": 6, "lon_0": 6, "lat_0": 6, "x_0": 6, "y_0": 6, "ellp": 6, "towgs84": 6, "no_def": 6, "proj_wgs84": 6, "longlat": 6, "datum": 6, "path_to_data_fold": 6, "geoloc": 6, "geo_coordin": 6, "latitud": 6, "longitud": 6, "oa01": 6, "band_oa01": 6, "oa01_radi": 6, "solar_flux_band_oa01": 6, "nx": 6, "ny": 6, "q": 6, "bandnumb": 6, "band_oa_temp": 6, "column": 6, "row": 6, "zero": [6, 7], "dtype": 6, "float32": 6, "float": 6, "3x3": 6, "extract_patches_2d": 6, "x_test_al": 6, "phase": 6, "sai": 6, "250": 6, "y_pred1": 6, "argmax": 6, "map1": 6, "pathches_arrai": 6, "inspect": 6, "juxtapos": 6, "against": 6, "discern": 6, "aptitud": 6, "intrins": 6, "alter": 6, "inlin": 6, "mpl": 6, "rcparam": [6, 14], "dpi": 6, "600": 6, "manner": 6, "filenam": 6, "lambert": 6, "azimuth": 6, "folder_nam": 6, "lustr": 6, "home": 6, "zcakwc1": 6, "03": 6, "model1": 6, "overal": 6, "logic": 6, "chunk_3_band_21": 6, "gp": 7, "close": 7, "relat": 7, "interpol": 7, "oi": 7, "statist": 7, "model": 7, "finit": 7, "joint": 7, "distribut": 7, "problem": 7, "treatment": 7, "uncertainti": 7, "probabilist": 7, "essenc": 7, "broader": 7, "sophist": 7, "correl": 7, "versatil": 7, "unknown": 7, "hard": 7, "term": 7, "li": 7, "rightarrow": 7, "tell": 7, "matric": 7, "deriv": 7, "graphic": 7, "notat": 7, "mathbf": 7, "x_1": 7, "ldot": 7, "x_n": 7, "matrix": 7, "element": 7, "behavior": 7, "radial": 7, "basi": 7, "rbf": 7, "exp": 7, "frac": 7, "2l": 7, "l": 7, "length": 7, "Their": 7, "control": 7, "rapidli": 7, "distanc": 7, "period": 7, "express": 7, "affect": 7, "maximum": 7, "likelihood": 7, "default": [7, 13], "necessit": 7, "explan": 7, "denot": 7, "assumpt": 7, "although": 7, "prior": 7, "sigma": 7, "2_ni": 7, "2_n": 7, "suggest": 7, "low": 7, "caution": 7, "guess": 7, "duo": 7, "risk": 7, "sensit": 7, "thoes": 7, "prepar": [7, 11], "suitabl": 7, "maxim": 7, "under": 7, "posterior": 7, "mae": 7, "auc": 7, "refin": 7, "retrain": 7, "implement": [7, 10, 11], "gpytorch": 7, "bn06": 10, "christoph": 10, "bishop": 10, "nasser": 10, "nasrabadi": 10, "volum": 10, "springer": 10, "2006": 10, "leo": 10, "breiman": 10, "bag": 10, "predictor": 10, "24": 10, "123": 10, "140": 10, "1996": 10, "45": 10, "2001": 10, "thoma": 10, "dietterich": 10, "ensembl": 10, "15": 10, "2000": 10, "alexei": 10, "dosovitskii": 10, "luca": 10, "beyer": 10, "alexand": 10, "kolesnikov": 10, "dirk": 10, "weissenborn": 10, "xiaohua": 10, "zhai": 10, "unterthin": 10, "mostafa": 10, "dehghani": 10, "matthia": 10, "minder": 10, "georg": 10, "heigold": 10, "sylvain": 10, "gelli": 10, "16x16": 10, "word": 10, "arxiv": 10, "preprint": 10, "2010": 10, "11929": 10, "2020": 10, "ian": 10, "goodfellow": 10, "yoshua": 10, "bengio": 10, "aaron": 10, "courvil": 10, "deep": 10, "mit": 10, "press": 10, "2016": 10, "www": 10, "deeplearningbook": 10, "org": 10, "alex": 10, "krizhevski": 10, "ilya": 10, "sutskev": 10, "geoffrei": 10, "hinton": 10, "imagenet": 10, "convolut": 10, "2012": 10, "yann": 10, "lecun": 10, "521": 10, "7553": 10, "436": 10, "444": 10, "2015": 10, "doi": 10, "1038": 10, "nature14539": 10, "ross": 10, "quinlan": 10, "induct": 10, "81": 10, "106": 10, "1986": 10, "wf02": 10, "witten": 10, "eib": 10, "frank": 10, "mine": 10, "java": 10, "acm": 10, "sigmod": 10, "record": 10, "31": 10, "76": 10, "77": 10, "2002": 10, "introduct": 11, "intellig": 11, "reinforc": 11, "fetch": 11, "roll": 11, "full": 11, "rollout": 11, "book": [13, 14], "written": 13, "kernel": 13, "rest": 13, "jupytext": 13, "presenc": 13, "That": 13, "init": 13, "markdownfil": 13, "md": 13, "html": 14, "add_": 14, "mbox": 14, "la_": 14, "tex": 14, "escap": 14, "dollar": 14, "keep": 14, "cycler": 14, "ion": 14, "19680801": 14, "logspac": 14, "randn": 14, "ii": 14, "cm": 14, "coolwarm": 14, "ax": 14, "prop_cycl": 14, "line2d": 14, "custom_lin": 14, "lw": 14, "fig": 14, "cold": 14, "medium": 14, "hot": 14, "lot": 14}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"ai": [0, 3, 11], "machin": [0, 3], "learn": [0, 3], "implement": 0, "load": 0, "data": [0, 1, 3, 5], "convolut": 0, "neural": 0, "network": 0, "cnn": 0, "introduct": [0, 2, 3, 6, 7, 8], "why": [0, 2], "imag": [0, 2, 6], "kei": [0, 3], "compon": 0, "how": [0, 2], "spatial": 0, "hierarchi": 0, "advantag": 0, "basic": [0, 7, 8], "code": [0, 9, 14], "random": 0, "forest": 0, "theoret": 0, "foundat": 0, "1": [0, 1, 11], "ensembl": 0, "2": [0, 1], "decis": 0, "tree": 0, "3": [0, 1], "bootstrap": 0, "aggreg": 0, "bag": 0, "4": [0, 1], "featur": 0, "python": [0, 8, 9], "us": [0, 2, 4], "scikit": 0, "vision": 0, "transform": 0, "vit": 0, "tokenis": 0, "posit": 0, "embed": 0, "architectur": 0, "classif": [0, 3, 5], "head": 0, "challeng": 0, "model": [0, 3, 6], "select": 0, "cross": 0, "valid": 0, "deep": 0, "tradit": 0, "ml": 0, "overlap": 0, "best": 0, "practic": [0, 7], "what": [0, 3], "bn06": [0, 3], "k": 0, "fold": 0, "grid": 0, "search": 0, "fetch": 1, "copernicu": 1, "space": 1, "googl": [1, 4], "earth": [1, 11], "engin": 1, "set": [1, 3], "up": 1, "account": 1, "logic": [1, 7], "step": [1, 4], "0": 1, "read": 1, "function": [1, 3, 7], "need": 1, "extract": 1, "filenam": 1, "from": [1, 5], "convert": 1, "ee": 1, "format": 1, "download": 1, "intellig": [2, 3], "reinforc": 2, "segment": 2, "iri": [2, 5], "instal": 2, "docker": 2, "access": 2, "prerequisit": 2, "pull": 2, "run": 2, "reus": 2, "mask": 2, "exercis": 2, "week": 2, "guidelin": 2, "artifici": 3, "ar": 3, "thei": 3, "understand": 3, "process": [3, 7, 9], "chain": [3, 7], "The": 3, "lifecycl": 3, "project": 3, "wf02": 3, "core": 3, "concept": [3, 7], "type": 3, "regress": 3, "differ": 3, "supervis": 3, "unsupervis": 3, "overfit": 3, "underfit": 3, "peril": 3, "too": 3, "much": 3, "problem": [3, 9], "oversimplif": 3, "loss": 3, "optim": [3, 8, 9], "gaug": 3, "accuraci": 3, "steer": 3, "train": 3, "test": 3, "partit": 3, "prepar": [4, 6], "colab": 4, "drive": 4, "sea": 5, "ic": 5, "lead": 5, "intro": 5, "definit": [5, 7], "import": 5, "ocean": 5, "land": 5, "colour": 5, "instrument": 5, "olci": 5, "preprocess": 5, "note": 5, "creat": [5, 13], "dataset": 5, "roll": 6, "out": 6, "full": 6, "applic": [6, 9], "displai": 6, "result": 6, "rollout": 6, "small": 6, "region": 6, "gaussian": [7, 9], "overview": [7, 8], "mathemat": [7, 8], "framework": [7, 8], "covari": 7, "kernel": 7, "mean": 7, "varianc": 7, "A": 7, "exampl": [7, 8, 13], "interpol": [8, 9], "histor": 8, "context": 8, "principl": 8, "redefinit": 9, "high": 9, "level": 9, "refer": 10, "welcom": 11, "geol0069": 11, "observ": 11, "chapter": 11, "notebook": [13, 14], "myst": [13, 14], "markdown": [13, 14], "an": 13, "cell": 13, "quickli": 13, "add": 13, "yaml": 13, "metadata": 13, "content": 14, "block": 14, "output": 14}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})